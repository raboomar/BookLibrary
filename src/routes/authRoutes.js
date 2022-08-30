const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const authController = require("../controllers/authController");
const { check } = require("express-validator");

router.get("/", auth, authController.getUser);

module.exports = router;
