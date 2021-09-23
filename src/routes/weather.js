const express = require("express");
const wetherController = require("../controllers/wetherController");
const router = express.Router();
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");
router.get(
  "/weather",
  auth.authMiddleware,
  tryCatch(wetherController.getWeather)
);
module.exports = router;
