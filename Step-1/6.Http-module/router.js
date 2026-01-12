const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url;
    if (url == "/") {
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("Hello World!")
    }
});

const port = 3000;
server.listen(port, () => {
    console.log("This is Port ",port)
})