const jwt = require("jsonwebtoken");

function createToken(userToken) {
  const token = jwt.sign(userToken, process.env.JWT_SECRET);
  return token;
}

function validateToken(userToken) {
  let result;
  jwt.verify(userToken, process.env.JWT_SECRET, function (err, decoded) {
    if (err !== null) {
      result = false;
    } else {
      result = decoded;
    }
  });
  return result;
}

module.exports = { createToken, validateToken };
