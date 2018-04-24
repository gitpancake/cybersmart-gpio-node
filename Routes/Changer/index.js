var route = require('express').Router();
var StateHandler = new(require('../../handlers/StateHandler'))();

route.post('/state', function(req, res) {
    StateHandler.ChangeState(req.body.state)
    .then(response => {
        return res.status(200).send({ "state " : response });
    }).catch(error => { 
        return res.status(400).send({ "error " : error });
    });
});

module.exports = route;