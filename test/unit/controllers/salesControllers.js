const sinon = require('sinon');
const { expect } = require('chai');
const salesServices = require('../../../services/salesService');
const salesControllers = require('../../../controllers/salesController');


describe('Busca os produtos no BD', () => {
  describe('quando não existe nenhuma venda listada ou a venda buscada não existe', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
    })

    it('é chamado o status com o código 404', async () => {
      await salesControllers.getSales(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    // it('é chamado o send com a mensagem "Sale not found"', async () => {
    //   await salesControllers.getSales(request, response);
    //   expect(response.send.calledWith('Sale not found')).to.be.equal(true);
    // });
  })

  describe('quando há resultados', ()=> {
    const response = {};
    const request = {};

    beforeEach(() => {
      request.body = {
        date: "2021-09-09T04:54:29.000Z",
        productId: 1,
        quantity: 2,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
    })
      it('deve retornar o status 200', async () => {
        await salesControllers.getSales(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
  });
})
