const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('Server started');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
})
