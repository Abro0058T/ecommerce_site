const express=require("express");
const { registerUser } = require("../controllers/userContorller");
const router=express.Router();

router.route("/register").post(registerUser)


module.exports=router