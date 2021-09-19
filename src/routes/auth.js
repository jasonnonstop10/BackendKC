const express = require("express");
const authController = require("../controllers/authController");
const { body } = require("express-validator");
const router = express.Router();
const { tryCatch } = require("../middleware/tryCatchController");
router.post("/login", tryCatch(authController.signup));
router.post(
  "/signup",
  body("email").notEmpty(),
  body("password").notEmpty(),
  body("name").notEmpty(),
  tryCatch(authController.signup)
);
module.exports = router;
