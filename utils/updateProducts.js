const productsService = require('../services/productsService');

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    if (!await productsService.checkIfExistsId(parseInt(id, 10))) {
      const errorMessage = { code: 404,
        message: 'Product not found' };
      throw errorMessage;
    }
    const newProduct = { name, quantity, id };
    productsService.updateProducts(name, quantity, id);
      res.status(200).json(newProduct);
  } catch (error) {
    console.log('ERROR: ', error);
      res.status(error.code).json({ message: error.message });
  }
};

module.exports = updateProduct;
