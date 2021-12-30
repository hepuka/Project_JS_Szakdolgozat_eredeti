const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();
const session=require('express-session');
const passport = require('passport');
const flash=require('connect-flash');
dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080
require('./server/config/passport')(passport);

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

//Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  // Passport middleware
app.use(passport.initialize());
app.use(passport.session());


app.use(flash());

  //Global Vars
  app.use((req,res, next) => {
    res.locals.success_msg=req.flash('succes_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    next();
});

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))
app.use('/', require('./server/routes/index'));
app.use('/users', require('./server/routes/users'));
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});