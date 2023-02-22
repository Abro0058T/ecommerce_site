const express = require('express');
const app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


//Route Imports

const product=require("./routes/productRoute")

app.use("/api/v1",product);

module.exports = app;