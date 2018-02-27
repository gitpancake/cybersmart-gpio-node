/*jshint esversion: 6*/
var GPIO = require('onoff').Gpio;

var SWITCH = [];
var pins = [7];

class StateHandler {
    constructor() {
        for(var pin in pins) {
            SWITCH.push(new GPIO(pin, 'out'));
        }
        console.log(SWITCH);
    }

    ChangeState(state) {
        
    }
}