const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});

const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on('connection', (socket) => {
    console.log(socket);
});
  
io.listen(4000);