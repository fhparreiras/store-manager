const express = require('express');

const routes = express.Router();

const salesService = require('../services/salesService');

// Rota para pegar todos produtos
routes.get('/sales', async (req, res) => {
  // Usando try-catch, uma outra forma de tratar erro qdo não o middleware de erro
  console.log('entrou nessa rota');
  try {
    console.log('Entrou no try do GETSALES');
      const rows = await salesService.getSales(); // acessa camada de model para trazer as sales do db
      res.status(200).json(rows);
  } catch (error) {
      res.status(404).json({ message: 'Sales not found' });
  }
});

module.exports = routes;
