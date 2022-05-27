const productsModel = require('../models/productsModel');

const getProducts = (id = null) => {
  if (id) {
    return productsModel.getById(id);
  }
  return productsModel.getAll();
};

const getProductsById = () => productsModel.getById();

module.exports = { getProducts, getProductsById };
