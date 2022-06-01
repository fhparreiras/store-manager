const express = require('express');

const routes = express.Router();

// const productsService = require('../services/productsService');
const { createProduct, getProducts, getProductsById } = require('../utils/index');

// Rota para pegar todos produtos
routes.get('/products', getProducts);

// Rota para pegar produtos por id
routes.get('/products/:id', getProductsById);

// Rota para registrar produto
routes.post('/products', createProduct);

module.exports = { routes, createProduct, getProducts, getProductsById };
