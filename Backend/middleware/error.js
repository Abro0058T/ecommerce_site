const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error";
  //Wrong mongodb id error
  if (err.name === "CastError") {
    const message = `REsource not found . Invalid:${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //Mongoose duplicate key error 
  if(err.code===11000)
  {
    const message =`Dublicate ${Object.keys(err.keyValue)} Entered`
    err = new ErrorHandler(message, 400);
  }
//Wrong JWT error 
  if(err.name==="JsonWebTokenError")
  {
    const message =`Json web token is invlaid,try again`;
    err = new ErrorHandler(message, 400);
  }

//JWT EXPIRE ERROR 

if(err.name==="TokenExpiredError")
{
  const message =`Json web token is expired,try again`;
  err = new ErrorHandler(message, 400);
}

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};


//3:25:32