http =  require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


app.use(cookieParser());
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended:false}));

var server = app.listen(80,"127.0.0.1", function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("listen on  http://%s:%s", host, port);

})
