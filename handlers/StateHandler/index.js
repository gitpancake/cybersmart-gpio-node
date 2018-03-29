/*jshint esversion: 6*/
var pyshell = require('python-shell')
var on_signal = '/home/pi/Documents/Projects/CyberSmart-Node/handlers/StateHandler/';
var off_signal = '/home/pi/Documents/Projects/CyberSmart-Node/handlers/StateHandler/';

class StateHandler {
    constructor() {

    }

    ChangeState(state) {
		return new Promise(function(resolve, reject) {
			var stateInt = parseInt(state);

			pyshell.run(stateInt === 0 ? "off.py" : "on.py", 
				{ scriptPath : stateInt === 0 ? off_signal : on_signal },
				function(err) {
					if (err)
						return reject(err);

					return resolve(stateInt === 0 ? 'OFF' : 'ON');
			});
		});
	}
	
	CheckState() {
		return new Promise(function(resolve, reject) {

		});
	}
}


module.exports = StateHandler;
