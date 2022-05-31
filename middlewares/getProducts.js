const productsService = require('../services/productsService');

const getProducts = async (req, res) => {
  try {
    console.log('Entrou no try');
      const [rows] = await productsService.getProducts();
      console.log('ROWS: ', rows);
      res.status(200).json(rows);
  } catch (error) {
      res.status(404).send('Product not found');
  }
};

module.exports = getProducts;
