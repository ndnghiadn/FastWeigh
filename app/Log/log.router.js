var express = require('express');
var router = express.Router();
var logcontroller = require("./log.controller")
//var accountcontroller = require("../Account/account.controller")

router.get("/", logcontroller.getAccount)

module.exports = router