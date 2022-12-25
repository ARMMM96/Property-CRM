const router = require("express").Router()
const Rules = require('../controller/rules.controller')





router.get("/create", Rules.createRule)
router.get("/rule", Rules.getRule)



module.exports = router