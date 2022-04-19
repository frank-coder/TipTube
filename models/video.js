const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxlength: 200
    },
    description: {
        type: String,
    },
    refLink: {
        type: String,
    },
    createdBy: {
        type: String
    },
    payToView: {
        type: Boolean,
        required: true
    },
    price: Number,
    createdAt: {
        type: Date,
        default: new Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: new Date.now()
    }
})