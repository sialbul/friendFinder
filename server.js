// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var bodyParser = require('body-parser')
var express = require("express");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
app.use(express.static(path.join(__dirname, './app/public')));

// Sets an initial port. We"ll use this later in our listener

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
 
//var tableData = require("../data/tableData");
//var waitListData = require("../data/waitinglistData");
// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: "+ PORT);
});
