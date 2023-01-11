const express = require("express");
const logIn = express.Router();
const db = require("../db/index");
const logger = require("../logger/logger");
const {
  dbErrorHandler,
  successHandler,
  requestErrorHandler,
  validationErrorHandler,
} = require("../responseHandler/index");

logIn.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlSelectLoginUser =
    "SELECT username, password FROM User WHERE username = ? AND password = ?;";
  db.query(sqlSelectLoginUser, [username, password], (err, result) => {
    if (result.length === 0) {
      requestErrorHandler(res, "Log in failed", err);
    } else if (err) {
      dbErrorHandler(res, err, "Log in failed");
    } else {
      successHandler(
        res,
        result,
        "Successful log in for user " + req.body.username
      );
    }
  });
});

module.exports = logIn;