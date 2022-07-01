var express = require('express');
var router = express.Router();
const billcontroller = require("../Bill/bill.controller")

router.get("/:code", billcontroller.findByCode)
router.get("/:id", billcontroller.findById)
router.get("/gettotal/:id", billcontroller.getTotalById)
router.post("/updatebillfruits/:id")
router.post("/addbill", billcontroller.add)
router.get("/", billcontroller.findall)
module.exports = router


