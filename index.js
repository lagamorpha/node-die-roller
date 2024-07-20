// initialize express
const express = require('express');
const app = express();

// home route
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// Default route
app.get('*', (req, res) => {
    res.send("Welcome to blank page... How'd you get here?");
});

// Setup listen server
app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
});