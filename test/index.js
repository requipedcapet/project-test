'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_test', {useNewUrlParser: true})
    .then(()=>{

        console.log('Connection Success!!');

        //server
        app.listen(port, () =>{
            console.log(`Server On.. http://localhost:${port}`);
        });
        
    })
    .catch( err =>{
        console.err(err);
    })