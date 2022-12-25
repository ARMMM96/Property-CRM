const userModel = require("../db/models/user.model")

class User {

    static createUser = async (req, res) => {
        try {
            if (req.body.password.length < 6) throw new Error("password must be more than 6")
            const userData = new userModel(req.body)
            await userData.save()

        }
        catch (e) {

        }
    }
    static getUser = async (req, res) => {
        res.json({
            "Name": "ahmed"
        })
    }


}




module.exports = User
