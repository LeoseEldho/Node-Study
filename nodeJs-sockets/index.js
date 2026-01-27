const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketIo(server);
app.use(express.static('public'));

const user = new Set();

io.on('connection', (socket) => {
    console.log("One server is Connected");

    socket.on("join", (username) => {
    user.add(username);
    io.emit('userJoined', username)
    
    io.emit('userList',Array.from(user))
});


});

const port = 3000;
server.listen(port, () => {
    console.log(port,"server is connected successfully")
})