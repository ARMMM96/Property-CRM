const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const userSchema = mongoose.Schema({
    fName: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
        required: true
    },
    lName: {
        type: String,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
        required: true
    },
    age: {
        type: Number,
        min: 21,
        max: 60,
        default: 21
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email format")
            }
        }
    },
    status: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 5,
        required: true,
        // match: ''
    },
    gender: {
        type: String,
        trim: true,
        lowercase: true,
        enum: ["male", "female"]
    },
    dOfBirth: {
        type: Date
    },
    phoneNum: {
        type: String,
        validate(value) {
            if (!validator.isMobilePhone(value, "ar-EG"))
                throw new Error("invalid number")
        }
    },
    addresses: [
        {
            addressType: {
                type: String,
                trim: true,
                required: true
            },
            details: {}
        }
    ],
    ruleId: {
        id: Schema.Types.ObjectId
    }

})








const User = mongoose.model("User", userSchema)
module.exports = User