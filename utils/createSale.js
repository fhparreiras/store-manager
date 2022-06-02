const { dbCreateSale } = require('../models/salesModel');
// const salesService = require('../services/salesService');

const createSale = (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const date = new Date();
    dbCreateSale(date, productId, quantity);
    res.status(201).json(req.body);
  } catch (error) {
    console.log('ERROR: ', error);
    res.status(error.code).json({ message: error.message });
  }
};

module.exports = createSale;
