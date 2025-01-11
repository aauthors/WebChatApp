# Web Chat App

A web chat application allowing mulitple individuals to communicate via text. 

This project is for learning technologies like: 
- HTML/CSS
- node.js
- websocket: socket.io (etc)

It's purpose is to also demonstrate Gitflow and good practice. 

## Node.js 

What is node.js?
- asynchronus event-driven JavaScript runtime. 
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
- utilises a web socket connection 

imagine it goes like this: 
- imagine web sockets as a phone call compared to email or mail. 
- starts out with a *handshake* 
    - like making a phone call 
    - client sends a request to the server 
    - if server agrees, responds with message upgrading websocket to HTTP. 
- line stays open: 
    - websocket stays open ulike HTTP 
- real-time communication. 

