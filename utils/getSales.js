const salesService = require('../services/salesService');

const getSales = async (req, res) => {
  console.log('entrou nessa rota');
  try {
    console.log('Entrou no try do GETSALES');
      const rows = await salesService.getSales();
      res.status(200).json(rows);
  } catch (error) {
      res.status(404).json({ message: 'Sales not found' });
  }
};

module.exports = getSales;
