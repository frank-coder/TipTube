const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true,"Name must be passed"],
        minlength: 3,
        maxlength: 20
    },
    lnAddress: {
        type: String,
        required: [true,"Ln address must be passed"],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    image: {
        type: String
    }

},{timestamps: true})




module.exports = mongoose.model("user",userSchema)