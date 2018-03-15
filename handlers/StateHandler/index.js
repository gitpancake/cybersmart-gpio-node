/*jshint esversion: 6*/
var pi = false;
var pyshell = require('python-shell')
var on_signal = '/home/pi/Documents/Projects/CyberSmart-Node/handlers/StateHandler/';
var off_signal = '/home/pi/Documents/Projects/CyberSmart-Node/handlers/StateHandler/';

var SWITCH = [];
var pins = [7];

class StateHandler {
    constructor() {

    }

    ChangeState(state) {
	var stateInt = parseInt(state);
	if (stateInt === 0) {
		pyshell.run("off.py", {scriptPath : off_signal}, function(err) {
			if (err) console.log(err);
			console.log('OFF');
		});
	} else if (stateInt === 1) {
		pyshell.run("on.py", {scriptPath : on_signal}, function(err) {
			if (err) console.log(err);
			console.log('ON');
		});
	}
    }
}


module.exports = StateHandler;
