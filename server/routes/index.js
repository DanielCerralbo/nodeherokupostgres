const express = require('express');
const app = express();

// Se especifica la ruta de los demás controladores para tenerlos todos unificados
app.use(require('./prueba'));


module.exports = app;