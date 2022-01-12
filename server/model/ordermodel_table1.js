const { Number } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name: String,
    kiszereles:String,
    egysegar: Number,
    mennyiseg:Number,
    vegosszeg:Number

},{collection:'asztalrendeles1'});

const table1db = mongoose.model('asztalrendeles1', schema);

module.exports = table1db;