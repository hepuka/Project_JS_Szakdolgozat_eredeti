const { Number } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    orderid: Number,
    time: Date,
    vegosszeg: Number ,
    table:String
},{collection:'orders'});

const orderdb = mongoose.model('orders', schema);

module.exports = orderdb;