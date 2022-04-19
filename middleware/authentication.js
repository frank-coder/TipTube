const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
require("dotenv").config()

const {UnauthenticatedError} = require("../errors")

const authenticateUser = async (req,res,next) => {
    const authHeader = req.header.authorization

    if(!authHeader || !authHeader.startsWith("Bearer")){
        throw new UnauthenticatedError("No authentication data!")
    }

    const token = authHeader.split(" ")[1]
    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET)

        req.user = {userId: payload.UserId, name:payload.name}
    }
    catch(err){
        throw new UnauthenticatedError("Invalid auth data")
    }

}

module.exports = {authenticateUser}