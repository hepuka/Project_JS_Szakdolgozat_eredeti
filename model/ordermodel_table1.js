const mongoose=require('mongoose');

var orderSchema=new mongoose.Schema({

    orderid:{type:Number},
    vegosszeg:{type:Number},
    time:{type:Date}
});

mongoose.model('Order', orderSchema);