require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../models/user.model");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const { json } = require("express");
// login
exports.login = async (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase();
  const user = await users.findOne({ email });
  if (!user) {
    throw {
      message: "User not found",
      status: 404,
    };
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw {
      message: "Incorrect password",
      status: 401,
    };
  }
  const token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.Secret_Key,
    { expiresIn: "1d" }
  );
  res.status(200).json({ result: user, token });
};

// sign up
exports.signup = async (req, res) => {
  let { email, password, username, name, pictureurl } = req.body;
  email = email.toLowerCase();
  const hasEmail = users.findOne({ email: email });
  if (!hasEmail) {
    throw {
      message: "Email already exists",
      status: 400,
    };
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.status = 400;
    error.data = errors.array();
    throw error;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const emaillowercase = email.toLowerCase();
  const result = await users.create({
    _id: req._id ? req._id : mongoose.Types.ObjectId(),
    email: emaillowercase,
    password: hashedPassword,
    username: username,
    name: name,
    pictureurl: pictureurl,
  });
  const token = jwt.sign(
    {
      _id: result._id,
      email: result.emait,
    },
    process.env.Secret_Key,
    { expiresIn: "1d" }
  );
  console.log(res);
  res.status(200).json({ result, token });
};
