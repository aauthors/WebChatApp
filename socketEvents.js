module.exports = (io) => {
    io.on('connection', (socket) => {
        socket.on('send name', (username) => {
            io.emit('send name', (username));
        });

        socket.on('send message', (chat) => {
            io.emit('send message', (chat));
        });
    });
};
