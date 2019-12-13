// Similar al startup de visual studio

// Puerto
// La variable se define en Heroku
process.env.PORT = process.env.PORT || 3000;

// Entorno
// La variable se define en Heroku
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Caducidad del Token
process.env.CADUCIDAD_TOKEN = '48h';

// Base de datos (similar al connectionstring)
// La variable se define en Heroku
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = '';
} else {
    urlDB = process.env.DATABASE_URL;
}
process.env.CONNECTION_STRING = urlDB;