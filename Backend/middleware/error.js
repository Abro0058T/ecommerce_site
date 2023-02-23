const ErrorHandler=require('../utils/errorhandler');


module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.message=err.message || "internal server error";
//Wrong mongodb id error
if(err.name==="CastError")
{
    const message=`REsource not found . Invalid:${err.path}`;
    err=new ErrorHandler(message,400);
}

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}