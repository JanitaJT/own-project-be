const express = require("express");
const login = require("./login");

const routes = express.Router();

routes.use("/login", login);

module.exports = routes;
