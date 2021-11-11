const express = require("express");
const authController = require("../controllers/authController");
const { body } = require("express-validator");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("multer");
const { tryCatch } = require("../middleware/tryCatchController");
router.post("/login", tryCatch(authController.login));
router.post(
  "/signup",
  body("email").notEmpty(),
  body("password").notEmpty(),
  body("name").notEmpty(),
  tryCatch(authController.signup)
);
router.post(
  "/images",
  auth.authMiddleware,
  multer({ dest: "uploads/" }).array("photo", 10),
  tryCatch(authController.postImage)
);
router.get("/user", auth.authMiddleware, tryCatch(authController.findOneUser));
router.put("/user", auth.authMiddleware, tryCatch(authController.updateUser));
router.delete(
  "/user",
  auth.authMiddleware,
  tryCatch(authController.deleteUser)
);
router.post("/forget", tryCatch(authController.forgetPassword));
module.exports = router;
