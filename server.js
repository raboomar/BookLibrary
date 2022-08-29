const express = require("express");
const app = express();
const v1UserRouter = require("./src/routes/userRoutes");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5001;
const connectDB = require("./config/db");
connectDB();
app.get("/", (req, res) => {
  res.send("App running");
});
app.use(bodyParser.json());
app.use("/api/v1/user", v1UserRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
