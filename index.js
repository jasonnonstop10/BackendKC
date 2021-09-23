require("dotenv").config();
const express = require("express");
const userRoute = require("./src/routes/auth");
const weatherRoute = require("./src/routes/weather");
const connectToDatabase = require("./db.js");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
const connectMongo = async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    console.log(err);
  }
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(connectMongo);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(userRoute);
app.use(weatherRoute);
app.use((err, req, res, next) => {
  console.log("ERROR: ", err);
  res.status(err.status || 500).json({
    message: "ERROR SYSTEM",
    error: err.message,
    status: err.status,
    data: err.data,
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
