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

module.exports = task;
