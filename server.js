const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require("body-parser");
const session=require('express-session');
const flash=require('connect-flash');
const passport = require('passport');
const cors=require('cors');
require('./config/passport')(passport);

//conn to server,MongoDB
const path = require('path');

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require('dotenv').config( { path : 'config.env'} )

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true,
  useFindAndModify:true
})
.then(() =>{
  app.listen(3000, ()=> { 
    console.log("A szerver elindult: http://localhost:3000");
    console.log('MongoDB kapcsolódva!');
  });

});

app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({ extended : true}))
app.use(cors());
app.set("view engine", "ejs")

  app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(express.json());

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./routes/router'));
app.use('/users', require('./routes/users'));

