// framework imports
const express = require('express');
const app = express();
const path = require('path');

// local imports
const { d4 } = require('./dice-mechanics/diceForms/d4');

// serve static directory
app.use(express.static(path.join(__dirname, 'public')));

// set to ejs, fix ejs pathing
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// home route
app.get('/', (req, res) => {
    console.log("Login to home page");
    res.render('home.ejs');
});

// die roller route
app.get('/dieRoller', (req, res) => {
    function d4_Click() {
        alert("test");
    }
    res.render('dieRoller', { d4, d4_Click });
});

// Default route
app.get('*', (req, res) => {
    res.send("Welcome to blank page... How'd you get here?");
});

// Setup listen server
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
});