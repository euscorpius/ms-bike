'use strict';

var express = require('express'),
    expressLogging = require('express-logging'),
    logger = require('logops');

var app = express();
app.use(expressLogging(logger));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var routes = require('./routes/routes');
app.use('/', routes);

// Middleware
/* app.use(function (req, res, next) {
    console.log("Middleware 1");
    req.someCustomValue = 1234;
    res.append("X-Custom-Header", "test")
    next();
}); */

var port = process.env.BIKE_PORT || 3000;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
