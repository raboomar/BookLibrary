const authService = require("../services/authService");

const getUser = async (req, res) => {
  authService.getUser(req, res);
};

const loginUser = async (req, res) => {
  authService.loginUser(req, res);
};

module.exports = { getUser, loginUser };
