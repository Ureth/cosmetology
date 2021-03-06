var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('./app_api/models/db');
var uglifyJs = require("uglify-js");
var fs = require('fs');


var routes = require('./app_server/routes/index');
var users = require('./app_server/routes/users');
var routesApi = require('./app_api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');
var appClientFiles = [
  'app_client/app.js',
  'app_client/common/services/cosmetAppData.service.js',
  'app_client/common/services/cosmetAppDataFace.service.js',
  'app_client/common/services/cosmetAppDataBody.service.js',
  'app_client/common/services/cosmetAppDataHead.service.js',
  'app_client/common/services/cosmetAppDataPrices.service.js',
  'app_client/common/filters/addHtmlLineBreaks.filter.js',
  'app_client/home/home.controller.js',
  'app_client/prices/prices.controller.js',
  'app_client/procedures/procedures.controller.js',
  'app_client/proceduresType/proceduresFace.controller.js',
  'app_client/proceduresType/proceduresBody.controller.js',
  'app_client/proceduresType/proceduresHead.controller.js',
  'app_client/about/about.controller.js',
  'app_client/diplomas/diplomas.controller.js',
  'app_client/procedureDetail/procedureDetail.controller.js',
  'app_client/contacts/contacts.controller.js'
];

var uglified = uglifyJs.minify(appClientFiles, { compress : false });

fs.writeFile('public/angular/cosmetApp.min.js', uglified.code, function (err){
  if(err) {
    console.log(err);
  } else {
    console.log('Script generated and saved: cosmetApp.min.js');
  }
});

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'img','favicon(2).ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

//app.use('/', routes);
app.use('/api', routesApi);
//app.use('/users', users);


app.use(function(req, res) {
  res.sendfile(path.join(__dirname, 'app_client', 'index.html'));
});

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
