var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    cors = require('cors'),
    compression = require('comrpession');

var ChangeRoutes = require('./Routes/Changer'),
    CheckRoutes = require('./Routes/Checker');

//Body - parsing
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cors());

app.use('/checker', CheckRoutes);
app.use('/changer', ChangeRoutes);

app.listen(port, function(err) {
    if (err)
        console.log(err);

    console.log("Listening on port " + port);
});