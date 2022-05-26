const express = require('express');

const routes = express.Router();
const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');

routes.use('/', salesController);

routes.use('/', productsController);

module.exports = routes;
