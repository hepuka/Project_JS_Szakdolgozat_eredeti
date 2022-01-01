const { Number } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name: String,
    kiszereles:String,
    price: Number 
},{collection:'italok'});

const italdb = mongoose.model('italok', schema);

module.exports = italdb;