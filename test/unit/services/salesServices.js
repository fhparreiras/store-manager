const sinon = require('sinon');
const { expect } = require('chai');
const salesModels = require('../../../models/salesModel');
const salesServices = require('../../../services/salesService');

describe('Busca as vendas no BD', () => {
  describe('quando não existe nenhuma venda listada ou a venda buscada não existe', () => {
    before(() => {
      sinon.stub(salesModels, 'getAll').resolves([[]]);
    });
    after(() => {
      salesModels.getAll.restore();
    })

    it('a função de buscar todas deve retornar um array vazio', async () => {
      const [result] = await salesServices.getSales();
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
      sinon.stub(salesModels, 'getAll').resolves(sales);
    });
    after(() => {
      salesModels.getAll.restore();
    })
      it('deve retornar um objeto com as chaves saleId, date, productId, quantity', async () => {
        const [resultado] = await salesServices.getSales();
        expect(resultado).to.include.all.keys('saleId', 'date', 'productId', 'quantity');
      });
  });

  describe('quando é passado um id como parâmetro e há resultado correspondente', ()=> {
    const sale = [
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      },
    ]
    before(() => {
      sinon.stub(salesModels, 'getById').resolves(sale);
    });
    after(() => {
      salesModels.getById.restore();
    })
      it('deve retornar um objeto referente ao id do parâmetro', async () => {
        const [resultado] = await salesModels.getById(1);
        console.log('TESTE MOCHA: ', resultado);
        expect(resultado.saleId).to.be.equal(1);
      });
  });
})
