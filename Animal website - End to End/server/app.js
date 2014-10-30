var express = require('express');
	path = require('path');
    fs = require('fs');
    logger = require('morgan');
    cookieParser = require('cookie-parser');
    bodyParser = require('body-parser');


var app = express();
 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
 
/**
 * Development Settings
 */
 
if ('development' == app.get('env')) {
// This will change in production since we'll be using the dist folder
app.use(express.static(path.join(__dirname, '../client/.tmp')));
 
// This covers serving up the index page
app.use(express.static(path.join(__dirname, '../client/app')));
 
// This is the new way to handle errors in Express 4. not errorHandler().
// For more about error-first best practices see http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});
 
}
 
/**
 * Production Settings
 */
if('production' == app.get('env')) {
app.use(express.static(path.join(__dirname, '/dist')));
}
 
/* Add this to fire the server */
var server = app.listen(3001, function() {
    console.log('Listening on port %d', server.address().port);
});


//---------------- Routing ----------------// 
var routes = require('./app/controllers');
routes.getAllRoutes(app);

// ----Also Worked ---//
//var navAndFooterCtrl = require('./app/controllers/navAndFooterCtrl.js');
//app.use('/',navAndFooterCtrl);
//-----------------------------------------// 

//---------------- Initialize data in db ----------------//
/*var InitDataService = require('./app/services/initDataService.js');
var initDataService = new InitDataService();
initDataService.initAllData();*/
//-----------------------------------------//

module.exports = app;
