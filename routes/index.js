const express = require('express');

const routes = express.Router();

const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');

routes.use('/', salesController);

routes.use('/products/:id', productsController.getProductsById);
routes.use('/products', productsController.getProducts);

module.exports = routes;
