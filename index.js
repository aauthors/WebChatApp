const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const https = require('https');
const fs = require('fs');
const os = require('os');

const app = express();

// Generate SSL certificate (use valid certs for production)
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
};

// Helper function to fetch local IP
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const iface of Object.values(interfaces)) {
        for (const config of iface) {
            if (config.family === 'IPv4' && !config.internal) {
                return config.address;
            }
        }
    }
    return 'localhost';
}

// Create HTTPS server
const httpsServer = https.createServer(options, app);

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Redirect HTTP to HTTPS
const httpServer = http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
});

// Handle socket events over HTTPS
const io = new Server(httpsServer);
io.on('connection', (socket) => {
    socket.on('send name', (username) => {
        io.emit('send name', username);
    });

    socket.on('send message', (chat) => {
        io.emit('send message', chat);
    });
});

// Start HTTPS server
const port = 3000;
httpsServer.listen(port, '0.0.0.0', () => {
    console.log(`HTTPS Server running at https://${getLocalIP()}:${port}`);
});

// Start HTTP redirect server
const httpPort = 8080;
httpServer.listen(httpPort, () => {
    console.log(`HTTP Server redirecting at http://${getLocalIP()}:${httpPort}`);
});
