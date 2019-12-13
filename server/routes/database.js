const config = require('../config/config');
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.URLDB,
  ssl: config.isProduction,
});

module.exports = { 
    getPruebaDatabase: function pruebaDatabase() {
        pool.connect();
        pool.query('select * from employee', (err, res) => {
            try {
                for (let row of res.rows) {
                    console.log(JSON.stringify(row));
                }
            } catch (error) {
                console.log(error);
            }
            pool.end();

            // Otra manera de hacer una query:
            // var query = pool.query("select * from employee");
            // pool.on("row", function (row, result) { 
            //     result.addRow(row); 
            // });
            // pool.on("end", function (result) {          
            //     pool.end();
            //     res.writeHead(200, {'Content-Type': 'text/plain'});
            //     res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            //     res.end();  
            // });
        });
    }
};