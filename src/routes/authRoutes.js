const express = require("express");
const SessionController = require("../controllers/SessionController");

const router = express.Router();

router.post("/login", SessionController.store);

module.exports = router;