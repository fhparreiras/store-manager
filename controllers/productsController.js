const express = require('express');
const { errorHandler, validateProductQuery } = require('../middlewares');

const routes = express.Router();

// const productsService = require('../services/productsService');
const { createProduct, deleteProducts, getProducts, getProductsById,
  updateProducts } = require('../utils/index');

// Rota para pegar todos produtos
routes.get('/products', getProducts);

// Rota para pegar produtos por id
routes.get('/products/:id', getProductsById);

// Rota para registrar produto
routes.post('/products', validateProductQuery, createProduct, errorHandler);

// Rota para atualizar produto
routes.put('/products/:id', updateProducts);

// Rota para deletar produto
routes.delete('/products/:id', deleteProducts);

module.exports = {
  routes,
  createProduct,
  deleteProducts,
  errorHandler,
  getProducts,
  getProductsById,
  updateProducts };
