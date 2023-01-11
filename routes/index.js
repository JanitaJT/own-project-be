const express = require("express");
const logIn = require("./logIn");

const routes = express.Router();

routes.use("/logIn", logIn);

module.exports = routes;
