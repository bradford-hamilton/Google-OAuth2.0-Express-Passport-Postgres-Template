require('dotenv').config();
var express = require('express');
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var auth = require('./auth');

var routes = require('./routes/index');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false
}));

// Passport/session initialization
app.use(auth.passport.initialize());
app.use(auth.passport.session());

// Set static files to folder /public
app.use(express.static(__dirname + '/public'));

app.use('/', routes);


app.listen(process.env.PORT || 1337);
