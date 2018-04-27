var route = require('express').Router();
var StateHandler = require('../handlers/StateHandler');

route.post('/changestate', function(req, res) {
    StateHandler.ChangeState(req.body.state).then(result => {
        res.status(200).send({ "state" : result });
    }).catch(err => {
        res.status(400).send({ "error" : ex } );
    })   
});

module.exports = route;