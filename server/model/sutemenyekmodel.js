const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {

        type:String,
        required: true
    },
    kiszereles: {

        type:String,
        required: true
    },
    ar: {
        type:Number,
        required: true
    },
    date: {

        type:Date,
        default: Date.now
    }
})

const sutemenyekdb = mongoose.model('sutemenyek', schema);

module.exports = sutemenyekdb;