const express = require('express');

const routes = express.Router();

// const salesService = require('../services/salesService');

const { getSales, getSalesById } = require('../utils/index');

// Rota para pegar todos produtos
routes.get('/sales', getSales);

routes.get('/sales/:id', getSalesById);

module.exports = routes;
