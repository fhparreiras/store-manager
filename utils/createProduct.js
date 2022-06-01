const { dbCreateProduct } = require('../models/productsModel');
const productsService = require('../services/productsService');

const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    if (await productsService.checkIfExists(name)) {
      const errorMessage = { code: 409,
        message: 'Product already exists' };
      throw errorMessage;
    }
    dbCreateProduct(name, quantity);
    const [getId] = await productsService.getProducts();
    const { id } = getId[getId.length - 1];
    const newProduct = { id, name, quantity };
      res.status(201).json(newProduct);
  } catch (error) {
    console.log('ERROR: ', error);
      res.status(error.code).json({ message: error.message });
  }
};

module.exports = createProduct;
