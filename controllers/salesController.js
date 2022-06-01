const express = require('express');

const routes = express.Router();

const { getSales, getSalesById } = require('../utils/index');

// Rota para pegar todos produtos
routes.get('/sales', getSales);

routes.get('/sales/:id', getSalesById);

module.exports = { routes, getSales, getSalesById };
