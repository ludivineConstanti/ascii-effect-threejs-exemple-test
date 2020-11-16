//const http = require('http');
const express = require('express');

const app = express();

//app.use(express.static("js"));

app.get('/', (req, res) => {
    console.log("hey");
    res.sendFile(__dirname + 'js/index.html');
    //res.sendFile('index.html');
});

app.listen(3000);