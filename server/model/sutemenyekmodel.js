const { Number } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name: String,
    kiszereles:String,
    price: Number 
},{collection:'sutemenyek'});

const sutemenyekdb = mongoose.model('sutemenyek', schema);

module.exports = sutemenyekdb;