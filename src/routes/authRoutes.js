const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const authController = require("../controllers/authController");
const { check } = require("express-validator");

router.get("/", auth, authController.getUser);

router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "PAssword is required").exists(),
  ],
  authController.loginUser
);

module.exports = router;
