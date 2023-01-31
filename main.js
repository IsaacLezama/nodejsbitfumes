// installing express and creating a server

// const express = require('express');
// const app = express();

// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// })


// event emitter with nodejs because express is based on it so we can use both in the same files

const EventEmitter = require('events');
const myEvent = new EventEmitter();
myEvent.on('test-event', (data) => {
    console.log('this event is listening');
    console.log(data);
});

const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    myEvent.emit('test-event', {name: 'Isaac'});
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})