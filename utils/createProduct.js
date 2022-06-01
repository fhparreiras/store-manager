const { dbCreateProduct } = require('../models/productsModel');
const productsService = require('../services/productsService');

const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    if (await productsService.checkIfExists(name)) {
      console.log('ENTROU NO IF INDESEJADO');
      const errorMessage = {
        message: 'Product already exists' };
      throw errorMessage;
    }
    dbCreateProduct(name, quantity);
    const [getId] = await productsService.getProducts();
    const { id } = getId[getId.length - 1];
    const newProduct = { id, name, quantity };
    console.log('TESTE ID: ', id);
      res.status(201).json(newProduct);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
};

module.exports = createProduct;
