const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

// Server the HMTL file 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle socket events
io.on('connection', (socket) => {
    socket.on('send name', (username) => {
        io.emit('send name', (username));
    });

    socket.on('send message', (chat) => {
        io.emit('send message', (chat));
    });
});

// Bind server to 0.0.0.0 to make it accessible on the local network
server.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening at the port: ${port}`);
});