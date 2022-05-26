const sales = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 },
  { sale_id: 2, product_id: 3, quantity: 15 },
];

const result = sales.map((data) => ({
  productId: data.product_id,
  quantity: data.quantity,
  saleId: data.sale_id,
}));

console.log(result);
