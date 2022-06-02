const salesModel = require('../models/salesModel');

const getSales = async (id = null) => {
  if (id) {
    return salesModel.getById(id);
  }
  const result = await salesModel.getAll();
  console.log('ENTROU NA GETSALES DO service', result);
  return result;
};

const createSales = async (date, productId, quantity) => {
  const result = await salesModel.dbCreateSale(date, productId, quantity);
  return result;
};

module.exports = { createSales, getSales };
