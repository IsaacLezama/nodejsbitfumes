const http = require('http');

/* CREATE FIRST SERVER */
const server = http.createServer((req, res) => {
    // res.write("hello node");
    // res.end();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
        JSON.stringify({
            data: "hello world!"
        })
    );
});

server.listen(3000);