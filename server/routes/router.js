const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const admin=require('../config/onlyforadmin');
const axios = require('axios');


route.get('/', (req,res) => res.render('login',{
}));

route.get('/login', (req,res) => res.render('login'));

route.get('/tables', ensureAuthenticated, (req,res) => res.render('tables', {

}));

route.get('/admin', services.homeRoutes);
route.get('/add-user', services.add_user)
route.get('/update-user', services.update_user)

route.get('/statistics', ensureAuthenticated, admin,(req,res) => res.render('statistics',{

  
}));
route.get('/income', ensureAuthenticated, admin,(req,res) => res.render('income',{

}));
route.get('/chief', ensureAuthenticated, admin,(req,res) => res.render('chief',{
}));
route.get('/dashboard', ensureAuthenticated, (req,res) => res.render('dashboard',{
}));
route.get('/warning', ensureAuthenticated, (req,res) => res.render('warning', {
}));
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route