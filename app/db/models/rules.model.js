const mongoose = require("mongoose")

const rulesSchema = mongoose.Schema({
    ruleName: {
        String,
        required: true
    },
    permstions: [

    ],
    urls: [

    ]

})




const rule = mongoose.model("ruleSchema", rulesSchema)
module.exports = User