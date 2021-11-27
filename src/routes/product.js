const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const { tryCatch } = require("../middleware/tryCatchController");

router.get("/product", tryCatch(productController.getProduct));

router.get("/product-by-group", tryCatch(productController.getProductByGroup));

router.get("/product-group", tryCatch(productController.findAllGroup));

router.post("/product", tryCatch(productController.postProduct));

module.exports = router;
