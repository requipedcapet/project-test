'use strict'

const express = require('express');
const bodyParser = require('body-parser');


//app
const app = express();


//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/jhan', (req, res) =>{

    return res.status(200).send({
        name: 'Jhan Carlos',
        last_Name: 'Castañeda valencia.',
        age: 20,
        interesting: ['vaginas', 'ass', 'pussys'],
        aspirations: 'to be grand',
        listen: 'yes hpta'
    });
});

//export module
module.exports = app; 