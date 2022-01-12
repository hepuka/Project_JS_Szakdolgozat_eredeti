const express = require('express');
const route = express.Router();
const services = require('../services/render');

const controller = require('../controller/controller');
const italcontroller = require('../controller/italcontroller');
const kavecontroller=require('../controller/kavecontroller');
const sutikontroller=require('../controller/suticontroller');
const atble1ordercontroller=require('../controller/ordertable1controller');

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const admin=require('../config/onlyforadmin');


route.get('/', (req,res) => res.render('login',{
}));
//route.get('/login', (req,res) => res.render('login'));
route.get('/tables', ensureAuthenticated, (req,res) => res.render('tables', {
}));

    //localhost:3000 utáni címrész
route.get('/admin', ensureAuthenticated, services.usermindrender);
route.get('/add-user', ensureAuthenticated, services.add_user);
route.get('/update-user', ensureAuthenticated, services.update_user);

/* route.get('/table_1', ensureAuthenticated, services.italokmindrender);
route.get('/table_1', ensureAuthenticated, services.kavekmindrender); */

route.get('/table_1_order', ensureAuthenticated, services.ordermindrender);


route.get('/statistics', ensureAuthenticated, admin,(req,res) => res.render('statistics',{
}));

route.get('/income', ensureAuthenticated, admin,(req,res) => res.render('income',{
}));

route.get('/table_2_order', ensureAuthenticated, (req,res) => res.render('table_2_order',{
}));
route.get('/table_3_order', ensureAuthenticated, (req,res) => res.render('table_3_order',{
}));
route.get('/table_4_order', ensureAuthenticated, (req,res) => res.render('table_4_order',{
}));

route.get('/table_1', ensureAuthenticated, (req,res) => res.render('table_1',{
}));

route.get('/table_2', ensureAuthenticated, (req,res) => res.render('table_2',{
}));

route.get('/table_3', ensureAuthenticated, (req,res) => res.render('table_3',{
}));

route.get('/table_4', ensureAuthenticated, (req,res) => res.render('table_4',{
}));

route.get('/chief', ensureAuthenticated, admin,(req,res) => res.render('chief',{
}));

route.get('/warning', ensureAuthenticated, (req,res) => res.render('warning', {
}));


//APIs
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

route.get('/api/italok', italcontroller.find);
route.get('/api/kavek', kavecontroller.find);
route.get('/api/sutemenyek', sutikontroller.find);
route.get('/api/asztalrendeles1', atble1ordercontroller.find);

module.exports = route