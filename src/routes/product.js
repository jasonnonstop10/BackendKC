const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();
const { tryCatch } = require("../middleware/tryCatchController");
router.post("/product", tryCatch(productController.postProduct));
module.exports = router;
