const express = require("express");
const login = express.Router();
const db = require("../db/index");
const logger = require("../logger/logger");
const { createToken } = require("../helperFunctions/jwt");
const bcrypt = require("bcrypt");

const {
  dbErrorHandler,
  successHandler,
  requestErrorHandler,
  validationErrorHandler,
} = require("../responseHandler/index");
const { body, validationResult } = require("express-validator");
const { validateUser } = require("../ValidationHandler/user");

login.post("/login", validateUser, (req, res) => {
  const errors = validationResult(req);
  const username = req.body.username;
  const password = req.body.password;
  if (!errors.isEmpty()) {
    logger.error("Validation error:  %O", errors);
  }
  if (!errors.isEmpty()) {
    return validationErrorHandler(res, "Formatting problem");
  }
  const sqlSelectLoginUser =
    "SELECT id, first_name, last_name, phone_num, email, password, username FROM User WHERE username = ?;";
  db.query(sqlSelectLoginUser, [username], (err, result) => {
    if (result.length === 0) {
      requestErrorHandler(res, "Log in failed", err);
    } else if (err) {
      dbErrorHandler(res, err, "Log in failed");
    } else {
      bcrypt.compare(
        password,
        result[0].password,
        function (err, isPasswordCorrect) {
          if (isPasswordCorrect) {
            let tokenPayload = JSON.parse(JSON.stringify(result[0])); // JSON.parse(JSON.stringify(result[0]))) to get rid of mysql rowDataPacket
            delete tokenPayload.password;
            let userToken = createToken(tokenPayload);
            successHandler(
              res,
              { jwt: userToken },
              "Successful log in for user " + req.body.username
            );
          } else {
            dbErrorHandler(res, err, "Log in failed");
          }
        }
      );
    }
  });
});

module.exports = login;
