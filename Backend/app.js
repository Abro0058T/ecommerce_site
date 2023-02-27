const express = require('express');
const app = express();

const errorMiddleware=require("./middleware/error")

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


//Route Imports

const product=require("./routes/productRoute")
const user=require("./routes/userRoute")
app.use("/api/v1",product);

app.use("/api/v1",user);

// Middleware for error


app.use(errorMiddleware);

module.exports = app;