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

const http = require('http');

const PORT = 3000;
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

server.listen(PORT);