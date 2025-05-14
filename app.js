const express = require('express');
const app = express();
const path =require('path');
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => { 
    const filePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(filePath);
}); 
app.get('/about-us', (req, res) => { 
    const filePath = path.join(__dirname, 'views', 'about-us.html');
    res.sendFile(filePath);
}); 
app.get('/sport-achivements', (req, res) => { 
    const filePath = path.join(__dirname, 'views', 'sport-achivements.html');
    res.sendFile(filePath);
}); 
app.get('/index', (req, res) => { 
    const filePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(filePath);
}); 
app.get('/gallery', (req, res) => { 
    const filePath = path.join(__dirname, 'views', 'gallery.html');
    res.sendFile(filePath);
}); 

app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
});