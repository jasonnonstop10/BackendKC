const express = require("express");
const rainController = require("../controllers/rainController");
const router = express.Router();
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");
router.get("/rain", auth.authMiddleware, tryCatch(rainController.getRain));
router.get(
  "/cumulativerain",
  auth.authMiddleware,
  tryCatch(rainController.getCumulativeRain)
);
module.exports = router;
