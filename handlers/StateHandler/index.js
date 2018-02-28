/*jshint esversion: 6*/
var pi = false;
var pyshell = require('python-shell')
var on_signal = 'on.py';
var off_signal = 'off.py';

var SWITCH = [];
var pins = [7];

class StateHandler {
    constructor() {

    }

    ChangeState(state) {
	if (state === 0) {
		var shell = pyshell.run(off_signal, {
		scriptPath: '/home/pi/Documents/Projects/CyberSmart-Node/handlers/StateHandler/',
		args: [state]
			}, function(err) {
			if (err) console.error(err);
		});
	} else if (state === 1) {
		var shell = pyshell.run(on_signal, {
		scriptPath: '/home/pi/Documents/Projects/CyberSmart-Node/handlers/StateHandler/',
		args: [state]
		}, function(err) {
			if (err) console.error(err);
		});
	}
    }
}


module.exports = StateHandler;
