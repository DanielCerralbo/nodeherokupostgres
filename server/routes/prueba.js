const express = require('express');
const app = express();
const Database = require('./database');

app.get('/home', async (req, res) => {
    //const result = await Database.getPruebaDatabase();
    res.json('Hello World');
});

module.exports = app;