const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req)
    res.writeHead(200, { "Content-Type": "Text/Plain" })
    res.end("haaaahaaaahhhhh")
});

const port = 3000;

server.listen(port, () => {
    console.log(port)
})