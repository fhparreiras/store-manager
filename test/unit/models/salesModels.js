const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../db/index');
const salesModel = require('../../../models/salesModel');

describe('Busca as vendas no BD', () => {
  describe('quando não existe nenhuma venda listada ou a venda buscada não existe', () => {
    // before(() => {
    //   sinon.stub(connection, 'execute').resolves([[]]);
    // });
    after(() => {
      connection.execute.restore();
    })

    it('a função de buscar todas deve retornar um array vazio', async () => {
      const [result] = await salesModel.getAll();
      expect(result).to.be.an('array');
      expect(result).to.be.empty;
    });

    it('a função de buscar pelo id deve retornar um array vazio', async () => {
      const result = await salesModel.getById();
      expect(result).to.be.an('array');
      expect(result).to.be.empty;
    });
  })

  describe('quando há resultados, padroniza para camelCase as chaves do objeto retornado', ()=> {
    before(() => {
      const sales = [
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:29.000Z",
          "productId": 1,
          "quantity": 2
        },
        {
          "saleId": 1,
          "date": "2021-09-09T04:54:54.000Z",
          "productId": 2,
          "quantity": 2
        }
      ]
      sinon.stub(connection, 'execute').resolves([sales]);
    });
    after(() => {
      connection.execute.restore();
    })
      it('deve retornar um objeto com as chaves saleId, date, productId, quantity', async () => {
        const [resultado] = await salesModel.getAll();
        expect(resultado).to.include.all.keys('saleId', 'date', 'productId', 'quantity');
      });
  });
})
