const userService = require("../services/userService");

const createNewUser = (req, res) => {
  const createUser = userService.createNewUser();
  res.send("created new user");
};

module.exports = { createNewUser };
