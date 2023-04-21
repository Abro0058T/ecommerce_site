const app=require('./app');
const dotenv=require('dotenv');
const connectDatabase=require('./config/database');
//Handeling  Uncaught erro like  undefine variable
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting doewn the server due too uncaught error`);
    process.exit(1);
})


//config
dotenv.config({path:"config/config.env"})

//Connection to datbase

connectDatabase();

 const server=app.listen(process.env.PORT ,()=>{
    console.log(`Server is working on  http://localhost:${process.env.PORT}`)
    // console.log(`Server is working on  http://localhost:4000`)
});


//Unhandled Promise Rejection

process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled pormise rejection`);

    server.close(()=>{
        process.exit(1);
    })

});
