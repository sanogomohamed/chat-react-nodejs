var express = require('express');
var socket = require('socket.io');
var app = express();

server = app.listen(3333, function(){
    console.log('server is running on port 3333')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});