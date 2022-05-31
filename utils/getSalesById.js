const salesService = require('../services/salesService');

const getSalesById = async (req, res) => {
  try {
    console.log('Entrou no try do GETSALES');
      const { id } = req.params;
      const rows = await salesService.getSales(id);
      if (rows.length === 0) {
        throw new Error();
      }
      res.status(200).json(rows);
  } catch (error) {
      res.status(404).json({ message: 'Sale not found' });
  }
};

module.exports = getSalesById;
