const connection = require('../db');

// buscar todas vendas no banco
const getAll = async () => {
  console.log('ENTROU NA GETALL do models');
  // console.log(connection.execute('SELECT * FROM StoreManager.sales_products'));
  const [sales] = await connection.execute(`SELECT p.sale_id, p.product_id, p.quantity, s.date
  FROM StoreManager.sales_products AS p
  LEFT JOIN StoreManager.sales AS s
  ON s.id = p.sale_id`);
  const result = sales.map((data) => ({
    productId: data.product_id,
    quantity: data.quantity,
    saleId: data.sale_id,
    date: data.date,
  }));
  return result;
};

module.exports = { getAll };
