const express = require("express");
const { getIncubators } = require("../controllers/incubatorController");
const router = express.Router();

router.get("/", getIncubators);

module.exports = router;
