const sinon = require('sinon');
const { expect } = require('chai');
const productsServices = require('../../../services/productsService');
const productsControllers = require('../../../controllers/productsController');


describe('Busca os produtos no BD', () => {
  describe('quando não existe nenhum produto listado ou o produto buscado não existe', () => {
    before(() => {
      sinon.stub(productsServices, 'getProducts').resolves([[]]);
    });
    after(() => {
      productsServices.getProducts.restore();
    })

    it('a função de buscar todos produtos deve retornar um array vazio', async () => {
      const [result] = await productsControllers.getProducts();
      expect(result).to.be.an('array');
      expect(result).to.be.empty;
    });
  })

  // describe('quando há resultados, padroniza para camelCase as chaves do objeto retornado', ()=> {
  //   before(() => {
  //     const products =   [
  //       {
  //         "id": 1,
  //         "name": "produto A",
  //         "quantity": 10
  //       },
  //       {
  //         "id": 2,
  //         "name": "produto B",
  //         "quantity": 20
  //       }
  //     ]
  //     sinon.stub(productsModels, 'getAll').resolves(products);
  //   });
  //   after(() => {
  //     productsModels.getAll.restore();
  //   })
  //     it('deve retornar um objeto com as chaves id, name, quantity', async () => {
  //       const [resultado] = await productsServices.getProducts();
  //       expect(resultado).to.include.all.keys('id', 'name', 'quantity');
  //     });
  // });

  // describe('quando é passado um id como parâmetro e há resultado correspondente', ()=> {
  //   const product = [
  //     {
  //       "id": 2,
  //       "name": "produto B",
  //       "quantity": 20
  //     }
  //   ]
  //   before(() => {
  //     sinon.stub(productsModels, 'getById').resolves(product);
  //   });
  //   after(() => {
  //     productsModels.getById.restore();
  //   })
  //     it('deve retornar um objeto referente ao id do parâmetro', async () => {
  //       const [resultado] = await productsServices.getProductsById(2);
  //       expect(resultado.id).to.be.equal(2);
  //     });
  // });
})
