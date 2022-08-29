const userService = require("../services/userService");

const createNewUser = async (req, res) => {
  const createUser = userService.createNewUser(req, res);

  res.send("created new user");
};

module.exports = { createNewUser };
