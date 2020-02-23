'use strict'

const express = require('express');
const bodyParser = require('body-parser');


//app
const app = express();


//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//routes
const productRouter = require('./routers/productRouter');
app.use('/api', productRouter);

//export module
module.exports = app; 