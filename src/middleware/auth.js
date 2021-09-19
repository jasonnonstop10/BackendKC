require("dotenv").config();
const jwt = require("jsonwebtoken");
const { CostExplorer } = require("aws-sdk");

exports.authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    const token = authHeader.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.Secret_Key, (err, user) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const userInfo = user;
        req.userId = userInfo._id;
        req.email = userInfo.email;
      }
    });
    return next();
  } catch (err) {
    err.message =
      "Did not specify token id, please add token in header with 'Bearer' ";
    next(err);
  }
};
