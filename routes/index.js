const express = require('express');

const routes = express.Router();

const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');

routes.get('/sales/:id', salesController.getSalesById);
routes.get('/sales', salesController.getSales);

routes.get('/products/:id', productsController.getProductsById);
routes.get('/products', productsController.getProducts);
routes.post('/products', productsController.createProduct);

module.exports = routes;
