const express = require("express");
const app = express();
const v1UserRouter = require("./src/routes/userRoutes");
const v1AuthRouter = require("./src/routes/authRoutes");
const v1BooksRouter = require("./src/routes/bookRoutes");
const bodyParser = require("body-parser");
const DB = require("./config/db");
var cors = require("cors");
app.use(cors());
DB.connectDB();
app.get("/", (req, res) => {
  res.send("App running");
});
app.use(bodyParser.json());
app.use("/api/v1/user", v1UserRouter);
app.use("/api/v1/auth", v1AuthRouter);
app.use("/api/v1/books", v1BooksRouter);
module.exports = app;
