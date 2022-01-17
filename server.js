const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const app = express();
const session=require('express-session');
const sessions=require('express-session');
const passport = require('passport');
const flash=require('connect-flash');
dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080
require('dotenv').config()
const eflash=require('express-flash');
const MongoDbStore=require('connect-mongo');
const mongoose = require('mongoose');
require('./server/config/passport')(passport);

const url='mongodb+srv://kavezo:kavezo@cluster0.q7veg.mongodb.net/kavezo?retryWrites=true&w=majority';
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true});
const connection=mongoose.connection;

connection.once('open', () =>{

console.log('Database connected!');
}).catch(err =>{
  console.log('Connection failed')
});


app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({ extended : true}))

app.set("view engine", "ejs")

  app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  
   app.use(sessions(
    {
      secret: process.env.COOKIE_SECRET,
      resave: false,
      store: MongoDbStore.create({ 
        mongoUrl: url}),
        saveUninitialized: false,
        cookie:{maxAge: 1000*60*60*24}    
    }));

app.use(eflash())

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use(express.json());

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'));
app.use('/users', require('./server/routes/users'));

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});