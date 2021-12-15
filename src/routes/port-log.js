const express = require("express");
const router = express.Router();
const portlogsController = require("../controllers/portlogsController");
const auth = require("../middleware/auth");
const { tryCatch } = require("../middleware/tryCatchController");

router.get(
    "/portlogs",
    auth.authMiddleware,
    tryCatch(portlogsController.findAll)
);

router.post(
    "/portlogs",
    auth.authMiddleware,
    tryCatch(portlogsController.create)
);

router.put(
    "/portlogs",
    auth.authMiddleware,
    tryCatch(portlogsController.update)
);

module.exports = router;