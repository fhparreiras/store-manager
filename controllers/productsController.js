const express = require('express');

const routes = express.Router();

// const productsService = require('../services/productsService');
const { getProducts, getProductsById } = require('../utils/index');

// Rota para pegar todos produtos
routes.get('/products', getProducts);

// Rota para pegar produtos por id
routes.get('/products/:id', getProductsById);

module.exports = { routes, getProducts, getProductsById };
