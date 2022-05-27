const mysql = require('mysql2/promise');

// Criando conexão com o banco de dados
const connection = mysql.createPool({
    host: process.env.MYSQL_USER || 'localhost', // usa process.env para Docker
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'tryber',
    password: process.env.MYSQL_PASSWORD || '123horta',
    database: process.env.MYSQL_NAME || 'StoreManager',
});

module.exports = connection;
