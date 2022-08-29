const express = require("express");
const app = express();
const v1UserRouter = require("./src/routes/userRoutes");
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("App running");
});
app.use("/api/v1/user", v1UserRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
