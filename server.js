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

app.use(morgan('tiny'));

connectDB();

app.use(bodyparser.urlencoded({ extended : true}))

app.set("view engine", "ejs")

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req,res, next) => {
    res.locals.success_msg=req.flash('succes_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    next();
});

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'));
app.use('/', require('./server/routes/index'));
app.use('/users', require('./server/routes/users'));
app.use('/italok', require('./server/routes/router'));


app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});