var express = require('express');
var bodyParser = require('body-parser');
var app = express();





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var index = require('./routes/index');
app.use('/',index);




var port = process.env.PORT || 8000;
app.listen(port);
module.exports = app;
