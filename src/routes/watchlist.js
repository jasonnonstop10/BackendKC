const express = require("express");
const watchlistController = require("../controllers/watchlistController");
const router = express.Router();
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");
router.get(
  "/watchlist",
  auth.authMiddleware,
  tryCatch(watchlistController.getWatchlist)
);
router.post(
  "/watchlist",
  auth.authMiddleware,
  tryCatch(watchlistController.postWatchlist)
);
router.put(
  "/watchlist",
  auth.authMiddleware,
  tryCatch(watchlistController.putWatchlist)
);
router.delete(
  "/watchlist",
  auth.authMiddleware,
  tryCatch(watchlistController.deleteWatchlist)
);
module.exports = router;
