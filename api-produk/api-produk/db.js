const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',   // sesuaikan dengan user MYSQL
    password: 'april123',  // sesuaikan password
    database: 'toko_db'
});

db.connect((err) =>{
    if (err) throw err;
    console.log('koneksi database berhasil!');
})

module.exports = db;