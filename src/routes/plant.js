const express = require("express");
const plantController = require("../controllers/plantController");
const router = express.Router();
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");
router.post("/plant", auth.authMiddleware, tryCatch(plantController.postPlant));
router.get("/plant", auth.authMiddleware, tryCatch(plantController.getPlant));

module.exports = router;
