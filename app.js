var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    db = require('./db/db')(mongoose),
    User = require('./db/users')(mongoose),
    Action = require('./db/actions')(mongoose),
    actions = require('./actions');
    app = express(),
    socket = require('socket.io-client')('http://localhost:3000');


    app.set('port', process.env.PORT || 3001);
    socket.on('connect', function(){
        console.log('connected');
    });
    socket.on('newAction', function(){
        actions.get(Action, actions);
    });
    socket.on('disconnect', function(){});

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));



});








