var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8000;
var stateRoutes = require('./routes/states');

//Body - parsing
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.options("/*", function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Request-With');
	res.sendStatus(200);
});

app.use('/api/state/', stateRoutes);

app.listen(port, function(err) {
    if (err)
        console.log(err);

    console.log("Listening on port " + port);
});