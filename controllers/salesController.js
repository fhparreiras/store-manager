const express = require('express');

const routes = express.Router();

const { createSale, getSales, getSalesById } = require('../utils/index');

// Rota para pegar todas as vendas
routes.get('/sales', getSales);

// Rota para pegar as vendas por id
routes.get('/sales/:id', getSalesById);

// Rota para criar vendas
routes.post('/sales', createSale);

module.exports = { routes, createSale, getSales, getSalesById };
