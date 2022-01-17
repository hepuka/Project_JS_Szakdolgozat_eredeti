const { Number } = require('mongoose');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    orderid: Number,
    time: Date,
    vegosszeg: Number 
},{collection:'orders'});

const orderdb = mongoose.model('orders', schema);

module.exports = orderdb;