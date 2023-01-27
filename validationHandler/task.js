const { body, validationResult, check } = require("express-validator");

let validateTask = [
  check("assigned")
    .notEmpty()
    .withMessage("Required")
    .bail()
    .matches(
      /^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])[ ](0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/
    )
    .withMessage("Accepted format: yyyy-MM-dd hh:mm:ss")
    .bail(),
  check("name")
    .notEmpty()
    .withMessage("Required")
    .bail()
    .isLength({ min: 2, max: 100 })
    .withMessage("Must be between 2-100 characters long")
    .bail()
    .matches(/^[A-Za-zäöåÄÖÅ0-9\s-]*$/)
    .withMessage("Accpeted format: letters, numbers, whitespace, -")
    .bail(),
  check("desciprion")
    .isLength({ max: 255 })
    .withMessage("Max length 255 characters")
    .bail(),
  check("completed")
    .notEmpty()
    .withMessage("Required")
    .matches(/^[01]$/)
    .withMessage("Must be 0 or 1")
    .bail(),
  check("dl")
    .notEmpty()
    .withMessage("Required")
    .bail()
    .matches(
      /^\d{4}(\-)(((0)[0-9])|((1)[0-2]))(\-)([0-2][0-9]|(3)[0-1])[ ](0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/
    )
    .withMessage("Accepted format: yyyy-MM-dd hh:mm:ss")
    .bail(),
];

module.exports = {
  validateTask,
};
