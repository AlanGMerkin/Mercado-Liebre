const express = require('express');
const path = require('path');

const app = express();

app.get('/login', (req,res) =>{
    res.sendFile((__dirname + '/views/login.html')); 
});

app.get('/register', (req,res) =>{
    res.sendFile((__dirname + '/views/register.html')); 
});

app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/home.html'));
});

app.use(express.static(__dirname +'/public'));  

app.listen(process.env.PORT || 3030, () => {
    console.log("Servidor corriendo");
});





