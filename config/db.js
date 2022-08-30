const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDb connect");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const disconnect = async (done) => {
  mongoose.disconnect(done);
};

module.exports = { connectDB, disconnect };
