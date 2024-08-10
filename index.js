const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
// const errorHandler = require("./middleware/errorHandler");
const app = express();
connectDB();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/test", (req, res) => {
  res.send("test  abdallah");
});
app.use("/api/users", userRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running on port " + port);
});
