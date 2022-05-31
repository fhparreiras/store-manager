const express = require('express');

const routes = express.Router();

const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');

routes.use('/sales/:id', salesController.getSalesById);
routes.use('/sales', salesController.getSales);

routes.use('/products/:id', productsController.getProductsById);
routes.use('/products', productsController.getProducts);

module.exports = routes;
