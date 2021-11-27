const express = require("express");
const rainController = require("../controllers/rainController");
const router = express.Router();
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");
router.get("/rain", auth.authMiddleware, tryCatch(rainController.getRain));
router.get("/getRegion", tryCatch(rainController.getRegion));
router.get(
  "/cumulativerain",
  auth.authMiddleware,
  tryCatch(rainController.getCumulativeRain)
);
router.get(
  "/findOneCumulativeRain",
  auth.authMiddleware,
  tryCatch(rainController.findOneCumulativeRain)
);
router.get(
  "/findOneWeeklyCumulativeRain",
  auth.authMiddleware,
  tryCatch(rainController.findOneWeeklyCumulativeRain)
);
module.exports = router;
