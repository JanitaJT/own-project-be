const { body, validationResult, check } = require("express-validator");

let validateUser = [
  check("username")
    .notEmpty()
    .withMessage("Username field can't be empty")
    .bail(),
  check("password")
    .notEmpty()
    .withMessage("Password field can't be empty")
    .bail(),
];

module.exports = {
  validateUser,
};
