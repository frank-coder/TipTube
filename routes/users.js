const express = require('express')
const router = express.Router()
const {register,login,updateUser,logout} = require('../controllers/user')


router.route("/register").post(register)
router.route("/login").post(login)
router.route("/edit").patch(updateUser)
router.route("/logout").post(logout)


module.exports = router