require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.header = (req, res, next) => {
  try {
    const authheader = req.get("Authorization");
    const token = authheader.split(" ")[1];
    console.log(token);
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const userInfo = decoded;
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
