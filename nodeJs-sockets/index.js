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
        socket.username=username
    io.emit('userJoined', username)
    
    io.emit('userList',Array.from(user))
});
    socket.on("message", (message) => {
    io.emit("message",message)
})
    socket.on("disconnect", () => {
        console.log("user has disconnect");

        user.forEach(u=> {
            if (u == socket.username) {
                user.delete(u)

                io.emit("userLeft", u)
                io.emit("userLeft",Array.from(user))
            }
        })
})
});

const port = 3000;
server.listen(port, () => {
    console.log(port,"server is connected successfully")
})