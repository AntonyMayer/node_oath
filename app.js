var express = require('express'),
    sys = require('sys'),
    util = require('util'),
    OAuth = require('oauth').OAuth,
    fs = require('fs');

var app = module.exports = express.createServer()

app.configure('development', function() {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.use(express.logger());
    app.use(express.cookieParser());
    app.use(express.session({ secret: "ssshhhh!" }));
});



app.listen(parseInt(process.env.PORT || 8080));