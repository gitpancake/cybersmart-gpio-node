/*jshint esversion: 6*/
var pi = false;

try {
    var GPIO = require('onoff').Gpio;
    pi = true;
} catch (ex) {
    console.log('[WARNING] RUN THIS ON A RASPBERRY PI TO USE GPIO');
}

var SWITCH = [];
var pins = [7];

class StateHandler {
    constructor() {
        if (pi) {
            for(var pin in pins) {
                SWITCH.push(new GPIO(pin, 'out'));
            }
            console.log(SWITCH);
        }
    }

    ChangeState(state) {
        console.log(state);
    }
}

module.exports = StateHandler;