const routes = require("./routes/index");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./db/index");
const logger = require("./logger/logger");
const dotenv = require("dotenv");

dotenv.config({});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);

app.listen(process.env.BE_SERVER_PORT, () => {
  logger.info(`Running on port ${process.env.BE_SERVER_PORT}`);
});
