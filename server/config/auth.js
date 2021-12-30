
const User=require('../model/model');

module.exports = {
    ensureAuthenticated: function(req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }else{
      req.flash('error_msg', 'Jelentkezz be!');
      res.redirect('/users/login');

      }

    },
    forwardAuthenticated: function(req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      }else{
        res.redirect('/dashboard');  

      }
         
    }
  };