const express = require('express');

const routes = express.Router();
const productsController = require('../controllers/productsController');

routes.use('/', productsController);

module.exports = routes;
