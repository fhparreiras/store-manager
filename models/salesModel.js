const connection = require('../db');

const serialize = (data) => ({
  productId: data.product_id,
  quantity: data.quantity,
  saleId: data.sale_id,
  date: data.date,
});

// busca todas vendas no banco
const getAll = async () => {
  console.log('ENTROU NA GETALL do models');
  const [sales] = await connection.execute(`SELECT p.sale_id, p.product_id, p.quantity, s.date
  FROM StoreManager.sales_products AS p
  LEFT JOIN StoreManager.sales AS s
  ON s.id = p.sale_id`);
  if (sales.length === 0) {
    return [[]];
  }
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

const dbCreateSale = async (date, productId, quantity) => {
  console.log('Entrou na dbCreateSale');
  await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [date],
  );
  console.log('Entrou na parte 2 da dbCreateSale');
  const getId = await getAll();
  const id = getId[getId.length - 1].saleId;
  console.log('TESTE GETID: ', id);
  const salesProducts = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [id, productId, quantity],
  );
  return console.log(salesProducts);
};

// dbCreateSale('2022-06-02 23:50:43', 1, 23);

module.exports = { dbCreateSale, getAll, getById };
