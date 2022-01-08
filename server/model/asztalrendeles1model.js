const { Number } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    name: String,
    kiszereles:String,
    price: Number,
    mennyiseg:Number
},{collection:'asztalrendeles1'});

const asztalrendeles1 = mongoose.model('asztalrendeles1', schema);

module.exports = asztalrendeles1;