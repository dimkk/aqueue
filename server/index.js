'use strict'

var express = require('express'),
    app = express();
var path = require('path');   
app.use(express.static('dist'));
app.get('/', function(req,res){
    res.sendFile(path.resolve('dist/index.html'));
});

app.listen(8080);