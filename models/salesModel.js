const connection = require('../db');

const serialize = (data) => ({
  productId: data.product_id,
  quantity: data.quantity,
  saleId: data.sale_id,
  date: data.date,
});

// buscar todas vendas no banco
const getAll = async () => {
  console.log('ENTROU NA GETALL do models');
  const [sales] = await connection.execute(`SELECT p.sale_id, p.product_id, p.quantity, s.date
  FROM StoreManager.sales_products AS p
  LEFT JOIN StoreManager.sales AS s
  ON s.id = p.sale_id`);
  const result = sales.map(serialize);
  return result;
};

const getById = async (id) => {
  const [sales] = await connection.execute(`SELECT p.product_id, p.quantity, s.date
  FROM StoreManager.sales_products AS p
  LEFT JOIN StoreManager.sales AS s
  ON s.id = p.sale_id
  WHERE Id = ?`, [id]);
  const result = sales.map(serialize);
  return result;
};

module.exports = { getAll, getById };