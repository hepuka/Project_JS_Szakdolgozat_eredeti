const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {

        type:String,
        required: true
    },
    username: {

        type:String,
        required: true
    },
    email : {
        type: String,
        required: true,
        index: true,
        unique: true
    },

    role: {
        type:String,
        required: true
    },

    password: {

        type:String,
        required: true
    },
    date: {

        type:Date,
        default: Date.now
    }
})

const Userdb = mongoose.model('users', schema);

module.exports = Userdb;