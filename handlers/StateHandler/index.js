/*jshint esversion: 6*/
var pi = false;
var GPIO = require('rpi-gpio');

var SWITCH = [];
var pins = [7];

class StateHandler {
    constructor() {
        try {
            GPIO.setup(7, GPIO.DIR_OUT, write);
        } catch (ex) {
            console.log('[WARNING] RUN THIS ON A RASPBERRY PI TO USE GPIO');
        }
    }

    ChangeState(state) {
        for (let pin in pins) {
            GPIO.write(7, (state === 1 ? true : false), function(err) {
                if (err) 
                    console.error(err);
                
                console.log("Written to pin");
            });
        }   
    }
}


module.exports = StateHandler;