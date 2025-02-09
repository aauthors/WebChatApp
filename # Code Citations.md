# Code Citations

## License: unknown
https://github.com/jairomer/websockets-group-chat/tree/e7ef79158a2213c861e6992c856b9d4708eb8950/server/index.js

```
= require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(
```


## License: MIT
https://github.com/fl0zone/template-socketio/tree/e7320b65ae10f33fbaf05491956cbdfe74bf8538/src/app.js

```
);
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port =
```


## License: unknown
https://github.com/Electrosophical/any/tree/e025c6392b4d23d4f84da5e659b983bdc56373d4/socket/index.js

```
on('connection', (socket) => {
        socket.on('send name', (username) => {
            io.emit('send name', (username));
        });

        socket.on('send message', (chat
```


## License: unknown
https://github.com/joshsolace/CHAT-APP-USING-SOCKET.IO/tree/6f440e731c72634153c9ff6f451472358062d306/index.js

```
, (username) => {
            io.emit('send name', (username));
        });

        socket.on('send message', (chat) => {
            io.emit('send message', (chat));
        })
```

