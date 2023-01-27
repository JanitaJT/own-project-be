const { body, validationResult, check } = require("express-validator");

let validateUser = [
  check("username").notEmpty().withMessage("Required").bail(),
  check("password").notEmpty().withMessage("Required").bail(),
];

module.exports = {
  validateUser,
};
