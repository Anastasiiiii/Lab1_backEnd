const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('Server started');
})

app.get('/', (req, res) => {
    res.send('Main page');
})

app.get('/login', (req, res) => {
    res.send('Login page');
})