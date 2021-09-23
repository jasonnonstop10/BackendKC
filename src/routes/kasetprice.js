const express = require("express");
const kasetpriceController = require("../controllers/kasetpriceController");
const router = express.Router();
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");
router.get(
  "/kasetprice",
  auth.authMiddleware,
  tryCatch(kasetpriceController.getkasetprice)
);
module.exports = router;
