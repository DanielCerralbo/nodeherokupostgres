// Similar al startup de visual studio

// Puerto
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Caducidad del Token
process.env.CADUCIDAD_TOKEN = '48h';

// Base de datos (similar al connectionstring)
// La variable DATABASE_URL está asociada al proyecto de node
let urlDB;
let isProduction;
if (process.env.NODE_ENV === 'dev') {
    urlDB = '';
    isProduction = false;
} else {
    urlDB = process.env.DATABASE_URL;
    isProduction = true;
}
process.env.URLDB = urlDB;