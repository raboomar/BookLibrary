const express = require("express");
const app = express();
const v1UserRouter = require("./src/routes/userRoutes");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
connectDB();
app.get("/", (req, res) => {
  res.send("App running");
});
app.use(bodyParser.json());
app.use("/api/v1/user", v1UserRouter);
module.exports = app;
