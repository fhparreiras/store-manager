const getProducts = require('./getProducts');
const getProductsById = require('./getProductsById');
const getSales = require('./getSales');
const getSalesById = require('./getSalesById');
const createProduct = require('./createProduct');
const updateProducts = require('./updateProducts');

module.exports = {
  createProduct,
  getProducts,
  getProductsById,
  getSales,
  getSalesById,
  updateProducts,
};
