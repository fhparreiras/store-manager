const express = require('express');

const routes = express.Router();

// const productsModel = require('../models/productsModel');
const productsService = require('../services/productsService');

// Rota para pegar todos produtos
routes.get('/products', async (req, res) => {
  // Usando try-catch, uma outra forma de tratar erro qdo não o middleware de erro
  try {
    console.log('Entrou no try');
      const [rows] = await productsService.getProducts(); // acessa camada de model para trazer os products do db
      console.log('ROWS: ', rows);
      res.status(200).json(rows);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

module.exports = routes;
