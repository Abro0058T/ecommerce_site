const ErrorHander=require("../utils/errorhandler")
const catchAsyncErrors=require("../middleware/catchAsyncErrors")
const User =require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//REgister a User

exports.registerUser=catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password}=req.body;

    const user=await User.create({
        name,email,password,avatar:{
            public_id :"This is a sample ia",
            url:"profulepicurd"
        }
    });
    const token= await user.getJWTToken();
    sendToken(user,201,res);
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
    // console.log(user)
    if(!user){
        return next(new ErrorHander("Invalid email or password",401));
    }
    const  isPasswordMatched= await user.comparePassword(password);
    console.log(isPasswordMatched)
    if(!isPasswordMatched)
    {
        return next(new ErrorHander("Invalid email or password",401))
    }
    sendToken(user,200,res);
});



//Logout user

exports.logout=catchAsyncErrors(async(req,res,next)=>{
    req.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnnly:true,
    })
    res.status(200).json({
        success:true,
        message:"Logged out ",
    })
})

//2:40:01