'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = Schema({
    name: String,
    size: String,
    dateInserted: {type: Date, default: Date.now},
    description: String,
    image: String
});


//export
module.exports = mongoose.model('product', productSchema);