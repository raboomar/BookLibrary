const { validationResult } = require("express-validator");
const config = require("config");
const User = require("../models/Users");
const createNewUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new User({
      name,
      email,
      password,
    });
    await user.save();
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
  return;
};

module.exports = { createNewUser };
