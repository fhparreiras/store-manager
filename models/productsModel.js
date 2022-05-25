const connection = require('../db');

// buscar todos os produtos no banco
const getAll = () => connection.execute('SELECT * FROM StoreManager.products');

module.exports = { getAll };
