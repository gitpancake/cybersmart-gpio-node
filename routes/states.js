var route = require('express').Router();

route.post('/changestate', function(req, res) {
    try {
        res.status(200).send({ "state" : req.body.state });
    } catch (ex) {
        res.status(400).send({ "error" : "Error setting state"} );
    }
});

module.exports = route;