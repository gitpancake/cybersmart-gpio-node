var pyshell = require('python-shell'),
    directory = '/home/pi/Documents/Projects/CyberSmart-Node/handlers/StateHandler',
    script = 'operate.py';

module.exports = new class StateHandler {
    constructor() {
        
    }

    ChangeState(state) {
        return new Promise(function(resolve, reject) {
            var stateInt = parseInt(state);

            pyshell.run(script, { 
                scriptPath : directory, 
                args : [stateInt]
            }, function(err) {
                    if(err)
                        return reject(err);

                return resolve('State altered');
            })
        });
    }
}
