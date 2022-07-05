var express = require('express');
require("dotenv").config();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const DBHelper = require("../njs/src/repository/database-helper")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
const handlerError = require("./src/error-handler/middleware-error")
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/',  indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.use(handlerError);


// DBHelper.createCollection("products");
// DBHelper.connectCollection("products").insertOne({username:"NgocThach"})


module.exports = app;
