require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./db.js");
const app = express();
const port = process.env.PORT || 3000;
const connectMongo = async (req, res, next) => {
  try {
    console.log("gg");
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
