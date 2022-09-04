var axios = require("axios");

const registerUser = async (user) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(user);
    const res = await axios.post(
      "http://localhost:5001/api/v1/user",
      body,
      config
    );
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = registerUser;
