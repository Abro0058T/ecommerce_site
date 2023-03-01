const ErrorHander=require("../utils/errorhandler")
const catchAsyncErrors=require("../middleware/catchAsyncErrors")
const User =require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//REgister a User

exports.registerUser=catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password}=req.body;

    const user=await User.create({
        name,email,password,avatar:{
            public_id :"This is a sample if",
            url:"profulepicurl"
        }
    });
    const token=user.getJWTToken();
    res.status(201).json({
        success:true,
        token,
    });
});


//login user


exports.loginUser=catchAsyncErrors(async(req,res,next)=>{
    const {email,password}=req.body;
    //checking if userhas given password and email both

    if(!email||!password)
    {
        return next(new ErrorHander("Please enter email & password ",400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("Invalid email or password",401));
    }
    const  isPasswordMatched=user.comparePassword(password);

    if(!user)
    {
        return next(new ErrorHander("Invalid email or password",401))
    }
    sendToken(user,200,res)
});