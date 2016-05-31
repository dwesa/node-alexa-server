// Requires for this skill
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var async = require('async');
var app = express();
var intentHendler = require('./app_modules/employer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



/*
 * function to initialize all modules that are located in the app_modules directory
 */

function init(cb) {
  app.post('/testing', intentHandler);
  app.listen(process.env.PORT);
}

init();