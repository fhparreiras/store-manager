const sinon = require('sinon');
const { expect } = require('chai');
const productsServices = require('../../../services/productsService');
const productsControllers = require('../../../controllers/productsController');


describe('Busca os produtos no BD', () => {
  describe('quando não existe nenhum produto listado ou o produto buscado não existe', () => {
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
      await productsControllers.getProducts(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Product not found"', async () => {
      await productsControllers.getProducts(request, response);
      expect(response.send.calledWith('Product not found')).to.be.equal(true);
    });
  })

  describe('quando há resultados', ()=> {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        id: 3,
        name: 'Escudo do Capitão América',
        quantity: 30
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();
    })
      it('deve retornar o status 200', async () => {
        await productsControllers.getProducts(request, response);
        expect(response.status.calledWith(200)).to.be.equal(true);
      });
  });
})
