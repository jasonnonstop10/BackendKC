require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../models/user.model");
const sendEmail = require("../functions/sendemail");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const { json } = require("express");
const { uploadManyFile } = require("../urils/s3");
const valid_id = mongoose.Types.ObjectId.isValid;
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
    { expiresIn: "30d" }
  );
  res.status(200).json({ result: user, token });
};

// sign up
exports.signup = async (req, res, next) => {
  let { email, password, name, region, pictureurl } = req.body;
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
    name,
    region,
    pictureurl,
  });
  const token = jwt.sign(
    {
      _id: result._id,
      email: result.emait,
    },
    process.env.Secret_Key,
    { expiresIn: "30d" }
  );
  console.log(res);
  res.status(200).json({ result, token });
};
//post image
exports.postImage = async (req, res, next) => {
  const { files } = req;
  const result = await uploadManyFile(files, "userResult");
  console.log(result);
  res.send(result);
};
//findoneuser with email and use qurry params
exports.findOneUser = async (req, res, next) => {
  const { email } = req.query;
  const user = await users.findOne({ email: email.toLowerCase() });
  if (!user) {
    throw {
      message: "User not found",
      status: 404,
    };
  }
  res.send(user);
};
//update user
exports.updateUser = async (req, res, next) => {
  const { userId } = req;
  const { name, region, pictureurl } = req.body;
  const result = await users.findOneAndUpdate(
    { _id: userId },
    { name, region, pictureurl },
    { new: true, omitUndefined: true }
  );
  // delete req.body._id;

  // const result = await users.findOneAndUpdate(userId, req.body);
  console.log(result);
  res.send(result);
};
//delete user
exports.deleteUser = async (req, res, next) => {
  const { userId } = req;
  const result = await users.findOneAndUpdate(
    { _id: userId },
    {
      delete_at: new Date(),
      isDeleted: true,
    },
    { new: true }
  );
  console.log(result);
  res.send(result);
};
//reset password and send email
exports.forgetPassword = async (req, res, next) => {
  const { email } = req.body;
  const user = await users.findOne({ email: email.toLowerCase() });
  if (!user) {
    throw {
      message: "User not found",
      status: 404,
    };
  }
  //random password
  const resetpassword = Math.random().toString(36).substring(7);
  const hashedPassword = await bcrypt.hash(resetpassword, 10);
  const result = await users.findOneAndUpdate(
    { email: email.toLowerCase() },
    { password: hashedPassword },
    { new: true }
  );
  //send email
  const seademail = await sendEmail(email, resetpassword);
  res.send(seademail);
};
