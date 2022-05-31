const productsService = require('../services/productsService');

const getProductsById = async (req, res) => {
  // Usando try-catch, uma outra forma de tratar erro qdo não o middleware de erro
  try {
      const { id } = req.params;
      const [rows] = await productsService.getProducts(id);
      if (rows.length === 0) {
        throw new Error();
      }
      res.status(200).json(rows[0]);
  } catch (error) {
      res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = getProductsById;
