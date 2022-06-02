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

const dbGetByName = (name) => {
  console.log('Entrou na getByName');
  return connection.execute(
    'SELECT * FROM StoreManager.products WHERE name = ?', [name],
  );
};

const updateProduct = async (name, quantity, id) => {
  const [result] = await connection.execute(
    `UPDATE StoreManager.products
      SET name = ?, quantity = ?
      WHERE id = ?`,
    [name, quantity, id],
  );
  return result.affectedRows;
};

const deleteProduct = async (id) => connection.execute(
  `DELETE FROM StoreManager.products
  WHERE id = ?`,
  [id],
);

module.exports = { dbCreateProduct, dbGetByName, deleteProduct, getAll, getById, updateProduct };
