const salesModel = require('../models/salesModel');

const getSales = async () => {
  const result = await salesModel.getAll();
  console.log('ENTROU NA GETSALES DO service', result);
  return result;
};

module.exports = { getSales };
