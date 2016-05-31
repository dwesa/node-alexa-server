// Requires for this skill
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var async = require('async');
var app = express();
var intentHandler = require('./app_modules/intents');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



/*
 * function to initialize all modules that are located in the app_modules directory
 */

function init(cb) {
  app.post('/testing', intentHandler);
  app.get('/hello', function(req, res){
    res.send({"hello guys"});
  });
  app.listen(process.env.PORT);
}

init();