const express = require("express");
const router = express.Router();
const regionController = require("../controllers/regionController");
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");

router.get(
    "/getRegion",
    tryCatch(regionController.findAll)
);

router.post(
    "/regions",
    tryCatch(regionController.create)
);

module.exports = router;