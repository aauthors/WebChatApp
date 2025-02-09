# Web Chat App

A web chat application allowing multiple individuals to communicate via text.

This project is for learning technologies like:
- HTML/CSS
- node.js
- websocket: socket.io (etc)

Its purpose is to also demonstrate Gitflow and good practice.

## Node.js

What is node.js?
- asynchronous event-driven JavaScript runtime.
- designed for scalable network applications
- benefits handling of multiple connections concurrently.
- advantageous over the common *thread-based* networking.

## Socket.io

What is Socket.IO?
- library enabling *low-latency, bi-directional* and *event-based* communication

```
+--------------+                    +--------------+
|              |  --------------->  |              |
|    CLIENT    |                    |    SERVER    |
|              |  <---------------  |              |
+--------------+                    +--------------+
```

How it works: https://socket.io/docs/v4/how-it-works/
- utilizes a web socket connection

Imagine it goes like this:
- imagine web sockets as a phone call compared to email or mail.
- starts out with a *handshake*
    - like making a phone call
    - client sends a request to the server
    - if server agrees, responds with message upgrading websocket to HTTP.
- line stays open:
    - websocket stays open unlike HTTP
- real-time communication.

## References

### License: unknown
https://github.com/jairomer/websockets-group-chat/tree/e7ef79158a2213c861e6992c856b9d4708eb8950/server/index.js

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
```

### License: MIT
https://github.com/fl0zone/template-socketio/tree/e7320b65ae10f33fbaf05491956cbdfe74bf8538/src/app.js

```javascript
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;
```

### License: unknown
https://github.com/Electrosophical/any/tree/e025c6392b4d23d4f84da5e659b983bdc56373d4/socket/index.js

```javascript
io.on('connection', (socket) => {
    socket.on('send name', (username) => {
        io.emit('send name', (username));
    });

    socket.on('send message', (chat) => {
        io.emit('send message', (chat));
    });
});
```

### License: unknown
https://github.com/joshsolace/CHAT-APP-USING-SOCKET.IO/tree/6f440e731c72634153c9ff6f451472358062d306/index.js

```javascript
socket.on('send name', (username) => {
    io.emit('send name', (username));
});

socket.on('send message', (chat) => {
    io.emit('send message', (chat));
});
```

