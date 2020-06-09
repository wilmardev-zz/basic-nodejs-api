const ENV = process.env.NODE_ENV || "development";
const config = require("./environments/" + ENV).config;
const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api-routes");
const mySqlSequelize = require("./database/mysql-db");
const app = express();

mySqlSequelize.initDataBase();
app.use(bodyParser.json());

app.use("/api/v1/delilah", apiRoutes.initApiRoutes());

app.listen(config.port, () => {
  console.log(`App running on port ${config.port}`);
});
