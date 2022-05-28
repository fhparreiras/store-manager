const salesModel = require('../models/salesModel');

const getSales = async (id = null) => {
  if (id) {
    return salesModel.getById(id);
  }
  const result = await salesModel.getAll();
  console.log('ENTROU NA GETSALES DO service', result);
  return result;
};

module.exports = { getSales };
