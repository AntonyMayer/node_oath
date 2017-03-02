var express = require('express'),
    sys = require('sys'),
    util = require('util'),
    OAuth = require('oauth').OAuth,
    fs = require('fs');

var app = module.exports = express.createServer()

app.listen(parseInt(process.env.PORT || 8080));