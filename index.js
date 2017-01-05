'use strict';
var APP_ID = 'amzn1.ask.skill.fc1c8b31-8fa5-4f11-8fcc-908a2bb04b0b';
var AlexaSkill = require('./AlexaSkill');
var SPEECH_OUTPUT = 'Hello';

var GreeterService = function(){
    AlexaSkill.call(this, APP_ID);
};
GreeterService.protoype = Object.create(AlexaSkill.prototype);

var helloResponseFunction = function(intent, session, response) {
    response.tell(SPEECH_OUTPUT);
};

GreeterService.prototype.eventHandlers.onLaunch = helloResponseFunction;

GreeterService.protoype.intentHandlers = {
    'HelloWorldIntent': helloResponseFunction
};

exports.handler = function(event, context){
    var greeterService = new GreeterService();
    greeterService.execture(event, context);
};
