const express = require("express");
const kasetplanController = require("../controllers/kasetplanController");
const router = express.Router();
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");
router.get(
  "/kasetplan",
  auth.authMiddleware,
  tryCatch(kasetplanController.getKasetplan)
);
router.post(
  "/kasetplan",
  auth.authMiddleware,
  tryCatch(kasetplanController.postKasetplan)
);
router.put(
  "/kasetplan",
  auth.authMiddleware,
  tryCatch(kasetplanController.putKasetplan)
);
router.delete(
  "/kasetplan",
  auth.authMiddleware,
  tryCatch(kasetplanController.deleteKasetplan)
);
router.get(
  "/porforio",
  auth.authMiddleware,
  tryCatch(kasetplanController.getporforio)
);
module.exports = router;
