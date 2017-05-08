var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var routes = require('./routes/index');
var users = require('./routes/users');
var Tasks=require('./routes/Tasks');
var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
 
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/', routes);
app.use('/users', users);
app.use('/Tasks',Tasks);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
next(err);
});
 
// error handlers
 
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
app.use(function(err, req, res, next) {
res.status(err.status || 500);
res.render('error', {
message: err.message,
error: err
});
});
}
 
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
res.status(err.status || 500);
res.render('error', {
message: err.message,
error: {}
});
});
module.exports = app;


//
//
//// Get the packages we need
//var express = require('express');
//
//// Create our Express application
//var app = express();
//
//// Use environment defined port or 3000
//var port = process.env.PORT || 3000;
//
//// Create our Express router
//var router = express.Router();
//
//// Initial dummy route for testing
//// http://localhost:3000/api
//router.get('/', function(req, res) {
//  res.json({ message: 'You are running dangerously low on beer!' });
//});
//
//// Register all our routes with /api
//app.use('/api', router);
//
//// Start the server
//app.listen(port);
//console.log('Insert beer on port ' + port);
