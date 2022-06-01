const connection = require('../db');

// buscar todos os produtos no banco
const getAll = () => connection.execute('SELECT * FROM StoreManager.products');

// buscar produto pelo ID
const getById = (id) => {
  console.log('CHAMOU GETBYID');
  return connection.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
};

const dbCreateProduct = (name, quantity) => {
  console.log('ENTROU NO INSERT DO CREATE PRODUCT');
  return connection.execute(
    'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)',
    [name, quantity],
  );
};

module.exports = { dbCreateProduct, getAll, getById };
