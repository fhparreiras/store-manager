const productsService = require('../services/productsService');

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!await productsService.checkIfExistsId(parseInt(id, 10))) {
      const errorMessage = { code: 404,
        message: 'Product not found' };
      throw errorMessage;
    }
    productsService.deleteProducts(parseInt(id, 10));
      res.status(204).json();
  } catch (error) {
    console.log('ERROR: ', error);
      res.status(error.code).json({ message: error.message });
  }
};

module.exports = deleteProduct;
