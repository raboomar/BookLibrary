const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const { check } = require("express-validator");
router.post(
  "/user",

  (req, res) => {
    res.status(200);
  }
);
module.exports = router;
