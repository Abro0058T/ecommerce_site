const express = require('express');
const app = express();

const errorMiddleware=require("./middleware/error")

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


//Route Imports

const product=require("./routes/productRoute")

app.use("/api/v1",product);


// Middleware for error


app.use(errorMiddleware);

module.exports = app;