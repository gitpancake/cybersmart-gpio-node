var express = require('express');
var app = express();
var port = 8000;
var stateRoutes = require('./routes/states');

app.use('/api/state/', stateRoutes);

app.listen(port, function(err) {
    if (err)
        console.log(err);

    console.log("Listening on port " + port);
});