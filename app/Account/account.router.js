var express = require('express');
var router = express.Router();
const accountController = require("./account.controller");

router.get("/", accountController.getAll)
router.get("/:id", accountController.getById)
router.post("/", accountController.add)
router.put("/:id", accountController.update)
router.delete("/:id", accountController.Delete)
module.exports = router

