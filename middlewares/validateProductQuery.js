const validateProductQuery = (req, res, next) => {
  const { name, quantity } = req.body;
  if (!name) {
    const errorMessage = { code: 400, message: '"name" is required' };
    throw errorMessage;
  }
  if (name.length < 5) {
    const errorMessage = { code: 422, message: '"name" length must be at least 5 characters long' };
    throw errorMessage;
  }
  if (!quantity) {
    const errorMessage = { code: 400, message: '"quantity" is required' };
    throw errorMessage;
  }
  if (quantity <= 0) {
    const errorMessage = { code: 422, message: '"quantity" must be greater than or equal to 1' };
    throw errorMessage;
  }
  next();
};

module.exports = validateProductQuery;
