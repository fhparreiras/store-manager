const productsModel = require('../models/productsModel');

const getProducts = (id = null) => {
  if (id) {
    return productsModel.getById(id);
  }
  return productsModel.getAll();
};

const getProductsById = (id) => productsModel.getById(id);

const checkIfExists = async (productName) => {
  const [db] = await getProducts();
  // console.log('name: ', productName);
  // console.log('TESTE DB CHECK: ', db);
  // console.log('teste retorno db some: ', db.some((product) => product.name === productName));
  return db.some((product) => product.name === productName);
};

const checkIfExistsId = async (id) => {
  const [db] = await getProducts();
  return db.some((product) => product.id === id);
};

const updateProducts = async (name, quantity, id) => {
  const result = await productsModel.updateProduct(name, quantity, id);
  return result;
};

const deleteProducts = async (id) => productsModel.deleteProduct(id);

module.exports = {
  checkIfExists,
  checkIfExistsId,
  deleteProducts,
  getProducts,
  getProductsById,
  updateProducts,
};
