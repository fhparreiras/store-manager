const productsModel = require('../models/productsModel');

const getProducts = () => productsModel.getAll();

module.exports = { getProducts };
