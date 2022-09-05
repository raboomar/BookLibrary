import axios from "axios";

const API_URL = "http://localhost:5001/api/v1/user";

const register = async (user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(user);
  const res = await axios.post(API_URL, body, config);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const login = async (user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(user);
  const res = await axios.post(
    "http://localhost:5001/api/v1/auth",
    body,
    config
  );
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const authService = {
  register,
  logout,
  login,
};
export default authService;
