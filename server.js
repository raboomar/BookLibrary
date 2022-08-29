const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("App running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
