const express = require("express");
const router = express.Router();
const kasetPriceController = require("../controllers/kaset-price.controller");
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");

router.get(
    "/kaset-products",
    auth.authMiddleware,
    tryCatch(kasetPriceController.findAll)
);

router.get(
    "/kaset-price",
    auth.authMiddleware,
    tryCatch(kasetPriceController.findOnePrice)
);

module.exports = router;