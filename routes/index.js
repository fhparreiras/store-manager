const express = require('express');

const routes = express.Router();

const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');

const { errorHandler } = require('../middlewares/index');

routes.get('/sales/:id', salesController.getSalesById, errorHandler);
routes.get('/sales', salesController.getSales, errorHandler);
routes.post('/sales', salesController.createSale, errorHandler);

routes.get('/products/:id', productsController.getProductsById, errorHandler);
routes.get('/products', productsController.getProducts, errorHandler);
routes.post('/products', productsController.createProduct, errorHandler);
routes.put('/products/:id', productsController.updateProducts, errorHandler);
routes.delete('/products/:id', productsController.deleteProducts, errorHandler);

module.exports = routes;
