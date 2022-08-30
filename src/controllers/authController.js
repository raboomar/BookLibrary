const authService = require("../services/authService");

const getUser = async (req, res) => {
  authService.getUser(req, res);
};

module.exports = { getUser };
