const jwt = require("jsonwebtoken");

function createToken(userToken) {
  const token = jwt.sign(userToken, process.env.JWT_SECRET);
  return token;
}

module.exports = { createToken };
