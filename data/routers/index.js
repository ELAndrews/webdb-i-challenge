const express = require("express");
const accountRouters = require("./account-routers");

const router = express.Router();

router.use(accountRouters);

module.exports = router;
