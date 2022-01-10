const express = require('express');
const route = express.Router()
const services = require('../services/render');

const controller = require('../controller/controller');
const italcontroller = require('../controller/italcontroller');
const kavecontroller = require('../controller/kavecontroller');
const sutemenyekcontroller = require('../controller/suticontroller');

const asztelrendeles1controller = require('../controller/asztelrendeles1controller');


const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const admin=require('../config/onlyforadmin');


route.get('/', (req,res) => res.render('login',{
}));
route.get('/login', (req,res) => res.render('login'));
route.get('/tables', ensureAuthenticated, (req,res) => res.render('tables', {
}));

route.get('/',  (req, res) => res.render('index.html'));


    //localhost:3000 utáni címrész
route.get('/admin', ensureAuthenticated, services.usermindrender);
route.get('/add-user', ensureAuthenticated, services.add_user);
route.get('/update-user', ensureAuthenticated, services.update_user);


route.get('/statistics', ensureAuthenticated, admin,(req,res) => res.render('statistics',{
}));

route.get('/income', ensureAuthenticated, admin,(req,res) => res.render('income',{
}));

route.get('/table_1', ensureAuthenticated, (req,res) => res.render('table_1',{
}));
route.get('/table_1_order', ensureAuthenticated, (req,res) => res.render('table_1_order',{
}));
route.get('/table_2_order', ensureAuthenticated, (req,res) => res.render('table_2_order',{
}));
route.get('/table_3_order', ensureAuthenticated, (req,res) => res.render('table_3_order',{
}));
route.get('/table_4_order', ensureAuthenticated, (req,res) => res.render('table_4_order',{
}));
route.get('/include/table_1', ensureAuthenticated, (req,res) => res.render('table_1',{
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
route.get('/api/sutemenyek', sutemenyekcontroller.find);

route.get('/api/1.asztal_rendeles', asztelrendeles1controller.find);

module.exports = route