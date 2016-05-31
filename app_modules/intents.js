'use strict';
var request = require('request');
var alexa = require('alexa-app');

var testApp = new alexa.app('test');

// simply respond to the intent
testApp.intent('employer', function(req, res) {
	res.say("You work for B M W North America");
});
testApp.intent('location', function(req, res) {
	res.say("we are in Chicago Illinois");
});

// not needed since the intent automatically launches
// // process launch request when no utterances detected
// sampleApp.launch(function(req, res) {
//     console.log('REQUEST', JSON.stringify(req));
//     res.say("Please say any number");
// });

module.exports = function(req, res) {
    testApp.request(req.body)
    .then(function(response){
    	res.json(response);
    });
};