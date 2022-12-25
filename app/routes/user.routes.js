const router = require("express").Router()
const User = require('../controller/user.contoller')



router.get("/user", User.getUser)



module.exports = router