const validateSaleQuery = (req, res, next) => {
  // const { date, productId, quantity } = req.body;
  // if (!productId) {
  //   const errorMessage = { code: 400, message: '"productId" is required' };
  //   throw errorMessage;
  // }
  next();
};

module.exports = validateSaleQuery;
