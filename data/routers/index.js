const express = require("express");
const accountRouters = require("./accountRouter");

const router = express.Router();

router.use(accountRouters);

module.exports = router;
