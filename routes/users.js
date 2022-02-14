const express = require('express');
const router = express.Router();
const passport = require('passport');
const { forwardAuthenticated } = require('../config/auth');
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));


router.post('/login', (req, res, next) => {
  passport.authenticate('local',function (err, user) { 
    if(err){
     res.redirect('/login')
    } else{
     if (! user) {
       res.redirect('/login')
     } else{
       req.login(user, function(err){
         if(err){
           res.redirect('/login')
         }else{

                if(user.role == 'Admin'){
                  res.redirect('/chief')
                   }
               if(user.role == 'Alap'){
                  res.redirect('/tables')
                   }

         }
       })
     }
    }
 })(req, res);
  

});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/users/login');
});

module.exports = router;