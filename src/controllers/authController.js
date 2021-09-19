require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../models/user.model");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const { json } = require("express");
const { uploadManyFile } = require("../urils/s3");
const { sendEmail } = require("../urils/sendEmail");
// login
exports.login = async (req, res, next) => {
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
      status: 404,
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
exports.signup = async (req, res, next) => {
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
//post image
exports.postImage = async (req, res, next) => {
  const { userId, files } = req;
  const result = await uploadManyFile(files, userId, "userResult");
  console.log(result);
  res.send(result);
};
// forget password
exports.forgetPassword = async (req, res, next) => {
  const { email } = req.body;
  const user = await users.findOne({ email: email });
  if (user) {
    // genarate Random Password
    const password = Math.random().toString(36).substring(7);
    const hashedPassword = await bcrypt.hash(password, 10);
    await users.updateOne({ email: email }, { password: hashedPassword });
    console.log(password);
  } else {
    err.massage = "User not found";
    err.status = 404;
  }
};
