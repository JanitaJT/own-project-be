const express = require("express");
const login = require("./login");
const task = require("./task");

const routes = express.Router();

routes.use("/login", login);
routes.use("/task", task);

module.exports = routes;
