const router = require("express").Router()



router.get("/user", (req, res) => {

    res.json({
        "firstName": "ahmed",
        "lastName": "rabie",
        "rule": "suepr admin"
    });

})



module.exports = router