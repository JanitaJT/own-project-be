const express = require("express");
const task = express.Router();
const db = require("../db/index");
const logger = require("../logger/logger");
const { validateToken } = require("../helperFunctions/jwt");
const {
  dbErrorHandler,
  successHandler,
  requestErrorHandler,
  validationErrorHandler,
} = require("../responseHandler/index");
const fns = require("date-fns");
const { validateTask } = require("../validationHandler/task");
const { body, validationResult } = require("express-validator");

task.get("/userTasks", (req, res) => {
  //   console.log("req", req.headers.authorization.split(" ")[1]); How to get jwt
  let jwt = req.headers.authorization.split(" ")[1];
  let isValidated = validateToken(jwt);
  if (!isValidated) {
    requestErrorHandler(res, "Token invalid", err);
  } else {
    const user_id = isValidated.id;
    const sqlGetUserTasks = "SELECT * FROM Task WHERE user_id = ?;";
    db.query(sqlGetUserTasks, [user_id], (err, result) => {
      if (err) {
        dbErrorHandler(res, err, "No tasks found");
      } else {
        successHandler(res, result, "Get tasks successful");
      }
    });
  }
});

task.post("/post", validateTask, (req, res) => {
  const errors = validationResult(req);
  let jwt = req.headers.authorization.split(" ")[1];
  let isValidated = validateToken(jwt);
  if (!isValidated) {
    requestErrorHandler(res, "Token invalid", err);
  } else {
    const assigned = fns.format(
      new Date(req.body.assigned),
      "yyyy-MM-dd hh:mm:ss"
    );
    const name = req.body.name;
    const description = req.body.description;
    const completed = req.body.completed;
    const dl = fns.format(new Date(req.body.dl), "yyyy-MM-dd hh:mm:ss");
    const user_id = isValidated.id;
    if (!errors.isEmpty()) {
      logger.error("Validation error:  %O", errors);
    }
    if (!errors.isEmpty()) {
      return validationErrorHandler(res, "Formatting problem");
    }
    const sqlAddTask =
      "INSERT INTO Task (assigned, name, description, completed, dl, user_id) VALUES (?,?,?,?,?,?);";
    db.query(
      sqlAddTask,
      [assigned, name, description, completed, dl, user_id],
      (err, result) => {
        if (err) {
          dbErrorHandler(res, err, "Insert into task failed");
        } else {
          successHandler(res, result, "New task successfully added");
          logger.info("Task " + req.body.name + " added");
        }
      }
    );
  }
});

module.exports = task;
