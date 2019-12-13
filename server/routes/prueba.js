const express = require('express');
const app = express();
const Database = require('./database');

app.get('/', async (req, res) => {
    const result = await Database.getPruebaDatabase();
});

module.exports = app;