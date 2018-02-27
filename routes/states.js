var route = require('express').Router();
var StateHandler = new(require('../handlers/StateHandler'))();

route.post('/changestate', function(req, res) {
    StateHandler.ChangeState(1);
    try {
        res.status(200).send({ "state" : req.body.state });
    } catch (ex) {
        res.status(400).send({ "error" : "Error setting state"} );
    }
});

module.exports = route;