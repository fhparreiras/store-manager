const connection = require('../db');

// buscar todos os produtos no banco
const getAll = () => connection.execute('SELECT * FROM StoreManager.products');

// buscar produto pelo ID
const getById = (id) => {
  console.log('CHAMOU GETBYID');
  return connection.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
};

module.exports = { getAll, getById };
