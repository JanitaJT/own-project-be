const express = require("express");
const logIn = express.Router();
const db = require("../db/index");
const logger = require("../logger/logger");
const { createToken } = require("../helperFunctions/jwt");
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
    "SELECT id, first_name, last_name, phone_num, email, job_title, username FROM User WHERE username = ? AND password = ?;";
  db.query(sqlSelectLoginUser, [username, password], (err, result) => {
    if (result.length === 0) {
      requestErrorHandler(res, "Log in failed", err);
    } else if (err) {
      dbErrorHandler(res, err, "Log in failed");
    } else {
      let tokenPayload = JSON.parse(JSON.stringify(result[0])); // JSON.parse(JSON.stringify(result[0]))) to get rid of mysql rowDataPacket
      let userToken = createToken(tokenPayload);
      successHandler(
        res,
        { jwt: userToken },
        "Successful log in for user " + req.body.username
      );
    }
  });
});

module.exports = logIn;
