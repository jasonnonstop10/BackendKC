const express = require("express");
const kasetpriceController = require("../controllers/kasetpriceController");
const router = express.Router();
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");
router.get(
  "/kasetpriceshow",
  auth.authMiddleware,
  tryCatch(kasetpriceController.getkasetpriceshow)
);
router.post(
  "/kasetpricesearch",
  auth.authMiddleware,
  tryCatch(kasetpriceController.getkasetpricesearch)
);
module.exports = router;
