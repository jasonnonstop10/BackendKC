const express = require("express");
const router = express.Router();
const portfolioController = require("../controllers/portfolioController");
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");

router.get(
    "/portfolio",
    auth.authMiddleware,
    tryCatch(portfolioController.findOne)
);

router.get(
    "/getSummaryItems",
    auth.authMiddleware,
    tryCatch(portfolioController.getSummaryItems)
);

router.post(
    "/portfolio",
    auth.authMiddleware,
    tryCatch(portfolioController.create)
);

router.put(
    "/portfolio",
    auth.authMiddleware,
    tryCatch(portfolioController.update)
);

module.exports = router;