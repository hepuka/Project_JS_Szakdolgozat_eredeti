const { Number } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name: String,
    kiszereles:String,
    price: Number 
},{collection:'kavek'});

const kavekdb = mongoose.model('kavek', schema);

module.exports = kavekdb;