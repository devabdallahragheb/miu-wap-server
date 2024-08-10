const mongoose = require("mongoose");
require("dotenv").config();
const user = process.env.user;
const password = process.env.password;
const dburl = `mongodb://${user}:${password}@mongo:27017`;
const connectDB = async () => {
  try {
    await mongoose.connect(dburl);
    console.log("MongoDB connected...");
  } catch (error) {
    console.log("error is ----" + error);
    process.exit(1);
  }
};
module.exports = connectDB;
