var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var app = express();

var userLoginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const purchaseRouter = require('./routes/purchase');
const addNewProductRouter = require('./routes/addnewproduct');
const deleteProductRouter = require('./routes/deleteproduct');
//var usersRouter = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
  
app.use(cors());

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/login', userLoginRouter);
app.use('/product', productRouter);
app.use('/purchase', purchaseRouter);
app.use('/addnewproduct', addNewProductRouter);
app.use('/deleteproduct', deleteProductRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

app.listen(3000);
