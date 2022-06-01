const productsModel = require('../models/productsModel');

const getProducts = (id = null) => {
  if (id) {
    return productsModel.getById(id);
  }
  return productsModel.getAll();
};

const getProductsById = () => productsModel.getById();

const checkIfExists = async (productName) => {
  const [db] = await getProducts();
  // console.log('name: ', productName);
  // console.log('TESTE DB CHECK: ', db);
  // console.log('teste retorno db some: ', db.some((product) => product.name === productName));
  return db.some((product) => product.name === productName);
};

module.exports = { checkIfExists, getProducts, getProductsById };
