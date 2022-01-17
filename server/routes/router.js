const express = require('express');
const route = express.Router();
const services = require('../services/render');
const app = express();
const controller = require('../controller/controller');
const italcontroller = require('../controller/italcontroller');
const kavecontroller=require('../controller/kavecontroller');
const sutikontroller=require('../controller/suticontroller');
const ordertable1controller=require('../controller/ordertable1controller');
const ordercontroller=require('../controller/ordercontroller');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const admin=require('../config/onlyforadmin');
const { dashboardView } = require('../controller/chifcontr');
const mongoose=require('mongoose');
const Order=mongoose.model('Order');
require("../model/ordermodel_table1");


route.get('/', (req,res) => res.render('login',{
}));

route.get('/tables', ensureAuthenticated, (req,res) => res.render('tables', {
}));

    //localhost:3000 utáni címrész
route.get('/admin', ensureAuthenticated, services.usermindrender);
route.get('/add-user', ensureAuthenticated,services.add_user);
route.get('/update-user', ensureAuthenticated, services.update_user);

route.get('/table_1', ensureAuthenticated, services.italokmindrender);
route.get('/table_2', ensureAuthenticated, services.ordermindrender);

route.get('/table_2', ensureAuthenticated, services.kavekmindrender);
route.get('/table_1', ensureAuthenticated, services.sutemenyekmindrender);

route.get('/income', ensureAuthenticated, admin,(req,res) => res.render('income',{
}));

route.get('/orders', ensureAuthenticated, (req,res) => res.render('orders',{
}));

route.get('/table_1_order', ensureAuthenticated, (req,res) => res.render('table_1_order',{
}));

route.get('/table_2_order', ensureAuthenticated, (req,res) => res.render('table_2_order',{
}));

route.get('/table_1', ensureAuthenticated, (req,res) => res.render('table_1',{
}));

route.get('/table_2', ensureAuthenticated, (req,res) => res.render('table_2',{
}));

route.get('/chief', ensureAuthenticated, admin,dashboardView, (req,res) => res.render('chief',{


}));

route.get('_headerlog',dashboardView,(req,res) => res.render('headerlog',{


}));


route.get('_header',dashboardView,(req,res) => res.render('header',{


}));

route.get('/warning', ensureAuthenticated, (req,res) => res.render('warning', {
}));


app.use('/table_1', ordertable1controller);

//APIs
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

route.get('/api/italok', italcontroller.find);
route.get('/api/kavek', kavecontroller.find);
route.get('/api/sutemenyek', sutikontroller.find);
route.get('/api/orders', ordercontroller.find);

route.post('/table_1_order', (req,res) =>{

    insertOrder(req,res);
  
});

function insertOrder(req,res){

    var d=new Date();
    var t=d.getTime();
    var counter=t;
    counter+=1;
    
    var order=new Order();
    order.vegosszeg=req.body.total;
    order.orderid=counter;
    order.time= Date.now();
    order.save((err,doc) =>{

        if(!err){
          
         
            res.redirect('/tables');
         
            
        }else{
            console.log('Error insertOrder: '+err);

        }

    });
}

module.exports = route