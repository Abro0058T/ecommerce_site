const { off } = require("../app");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt=require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser=catchAsyncErrors(async(req,res,next)=>{
    const {token}=req.cookies;
    console.log(token);
    if(!token)
    {
        next(new ErrorHandler("Please log in to access this resource",401));
    }
    const decodedData=jwt.verify(token,process.env.JWT_SECRET);

    req.user=+await User.findById(decodedData.id)
    next()

    })



