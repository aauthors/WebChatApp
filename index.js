/**
 * This code is based on examples from the Express and Socket.IO documentation.
 * Express: https://expressjs.com/
 * Socket.IO: https://socket.io/
 */

const { app, server, io, port } = require('./server');
const setupRoutes = require('./routes');
const setupSocketEvents = require('./socketEvents');

setupRoutes(app);
setupSocketEvents(io);

server.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening at the port: ${port}`);
});