/* -------------------------------------------CREATE FIRST SERVER */

//const http = require('http');


// const server = http.createServer((req, res) => {
//     // res.write("hello node");
//     // res.end();

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//         JSON.stringify({
//             data: "hello world!"
//         })
//     );
// });

// server.listen(3000);


/* -----------------------------------understanding common js */

// const { area, circumference } = require('./circle');

// console.log(area(5));
// console.log(circumference(5));

// const Circle = require('./circle');
// const circle = new Circle();
// console.log(circle.area(5));


/* --------------------------------- what are global objects */

// console.log(__dirname); this wont work with global because it appears to be global obj but is not
//check documentation to see more of this


/* --------------------------------------- creating packag.json file */

// const http = require('http');

// const PORT = 3000;
// const server = http.createServer((req, res) => {
//     // res.write("hello node");
//     // res.end();

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(
//         JSON.stringify({
//             data: "hello world!"
//         })
//     );
// });

// server.listen(PORT);

/* ------------------------------ handling http routes */

// const http = require('http');

// const PORT = 3000;
// const server = http.createServer((req, res) => {

//     if(req.url === '/') {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(
//             JSON.stringify({
//                 data: "hello world!"
//             })
//         );
//     } else if(req.url === '/about') {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(
//             JSON.stringify({
//                 data: "this is about page!"
//             })
//         );
//     } else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(
//             JSON.stringify({
//                 data: "page not found!"
//             })
//         );
//     }


// });

// server.listen(PORT);

/* --------------------------------------- show html content */

// const http = require('http');

// const PORT = 3000;
// const server = http.createServer((req, res) => {

//     if(req.url === '/') {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("pages/home.html");
//         res.end();
//     } else if(req.url === '/about') {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("<h1>welcome to about page</h1>");
//         res.end(
            
//         );
//     } else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.write("<h1>page not found</h1>");
//         res.end(
            
//         );
//     }


// });

// server.listen(PORT);


/* ------------------------------------- file system module readfile */

// const http = require('http');
// const fs = require('fs');

// const PORT = 3000;
// const server = http.createServer((req, res) => {

//     if(req.url === '/') {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.readFile("pages/home.html", "utf8", (err, data) => {
//             if (err) throw err;
//             res.write(data);
//             res.end();
//         });
//     } else if(req.url === '/about') {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.readFile("pages/about.html", "utf8", (err, data) => {
//             if (err) throw err;
//             res.write(data);
//             res.end();
//         });
//     } else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         fs.readFile("pages/404.html", "utf8", (err, data) => {
//             if (err) throw err;
//             res.write(data);
//             res.end();
//         });
//     }

// res.end();

// });

// server.listen(PORT);

/* ------------------------------------------ fs write large file */

// const http = require('http');
// const fs = require('fs');

// const PORT = 3000;
// const server = http.createServer((req, res) => {

//     if(req.url === '/') {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.readFile("pages/home.html", "utf8", (err, data) => {
//             if (err) throw err;
//             res.write(data);
//             res.end();
//         });
//     } else if(req.url === '/about') {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.readFile("pages/about.html", "utf8", (err, data) => {
//             if (err) throw err;
//             res.write(data);
//             res.end();
//         });
//     } else if(req.url === '/create-file') {
//         for(let i = 0; i < 10000; i++) {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             fs.appendFile("temp/test.html", "<h1>this is test file</h1>", (err) => {
//                 if (err) throw err;
//             });
//         }
//         res.write('File is created');
//         res.end();
//     }else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         fs.readFile("pages/404.html", "utf8", (err, data) => {
//             if (err) throw err;
//             res.write(data);
//             res.end();
//         });
//     }

// });

// server.listen(PORT);


/* --------------------------------------- event loop explained */

const func1 = () => console.log("func1");
const func2 = () => console.log("func2");
const func3 = () => {
    console.log("func3");
    setTimeout = (func1, 0);
    new Promise((resolve, reject) => {
        resolve('i am promise');
    }).then((res) => console.log(res));
    func2();
}
func3();
console.log("finished");