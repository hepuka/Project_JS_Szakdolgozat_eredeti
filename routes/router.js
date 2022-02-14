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

const { dashboardView } = require("../controller/dashboardController");
const { dashboardView2 } = require("../controller/dashboardController");
const { dashboardViewtables } = require("../controller/dashboardController");
const { dashboardViewtable_1 } = require("../controller/dashboardController");
const { dashboardViewtable_2 } = require("../controller/dashboardController");
const { dashboardViewchief } = require("../controller/dashboardController");
const { dashboardViewadduser } = require("../controller/dashboardController");
const { dashboardViewadmin } = require("../controller/dashboardController");
const { dashboardViewupdateuser } = require("../controller/dashboardController");
const { dashboardVieworders } = require("../controller/dashboardController");
const { dashboardViewproducts } = require("../controller/dashboardController");
const { dashboardViewaddital } = require("../controller/dashboardController");
const { dashboardViewaddkave } = require("../controller/dashboardController");
const { dashboardViewaddsuti } = require("../controller/dashboardController");


const mongoose=require('mongoose');
const Order=mongoose.model('Order');
require("../model/ordermodel_table1");

route.get('/', (req,res) => res.render('login',{
}));

route.get('/tables', ensureAuthenticated,dashboardViewtables, (req,res) => res.render('tables', {
}));

    //localhost:3000 utáni címrész
route.get('/admin', ensureAuthenticated,admin ,services.usermindrender);
route.get('/add-user', ensureAuthenticated,dashboardViewadduser, admin, services.add_user);
route.get('/update-user', ensureAuthenticated, admin, services.update_user, dashboardViewupdateuser);

route.get('/table_1', ensureAuthenticated, dashboardViewtable_1,services.italokmindrender);
route.get('/orders', ensureAuthenticated,admin,dashboardVieworders, services.ordermindrender);

route.get('/table_2', ensureAuthenticated,dashboardViewtable_2,services.kavekmindrender);
route.get('/table_1', ensureAuthenticated,services.sutemenyekmindrender);

route.get('/products', ensureAuthenticated,dashboardViewproducts, admin, services.italokmindrenderadmin, services.italokmindrenderadmin, services.sutemenyekmindrenderadmin);

route.get('/add-ital', ensureAuthenticated,dashboardViewaddital, admin, services.add_ital);
route.get('/add-kave', ensureAuthenticated,dashboardViewaddkave, admin, services.add_kave);
route.get('/add-suti', ensureAuthenticated,dashboardViewaddsuti, admin, services.add_suti);

route.get('/orders/delete/:id', (req,res) => {

    Order.findByIdAndRemove(req.params.id,(err,docs) =>{

        if(!err){
          
            res.redirect('/orders');
     
        }else{

            console.log('Error in delete: '+err);
        }
    });

});

route.get('/table_1_order', ensureAuthenticated, dashboardView,(req,res) => res.render('table_1_order',{
}));

route.get('/table_2_order', ensureAuthenticated, dashboardView2,(req,res) => res.render('table_2_order',{
}));

route.get('/table_2', ensureAuthenticated,(req,res) => res.render('table_2',{
}));

route.get('/chief', ensureAuthenticated, dashboardViewchief, admin, (req,res) => res.render('chief',{
}));

route.get('/warning', ensureAuthenticated, (req,res) => res.render('warning', {
}));


//APIs
route.post('/api/users', controller.create);
route.post('/api/italok', italcontroller.create);
route.post('/api/kavek', kavecontroller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
route.get('/api/italok', italcontroller.find);
route.get('/api/kavek', kavecontroller.find);
route.get('/api/sutemenyek', sutikontroller.find);
route.post('/api/sutemenyek', sutikontroller.create);
route.get('/api/orders', ordercontroller.find);



route.post('/table_1_order', (req,res) =>{

    insertOrder(req,res);
  
});

route.post('/table_2_order', (req,res) =>{

    insertOrder2(req,res);
  
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


function insertOrder2(req,res){

    var d=new Date();
    var t=d.getTime();
    var counter=t;
    counter+=1;
    
    var order2=new Order();
    order2.vegosszeg=req.body.total;
    order2.orderid=counter;
    order2.time= Date.now();
    order2.save((err,doc) =>{

        if(!err){
          
         
            res.redirect('/tables');
         
            
        }else{
            console.log('Error insertOrder: '+err);

        }

    });
}


module.exports = route