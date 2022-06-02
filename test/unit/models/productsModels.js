const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../db/index');
const productsModel = require('../../../models/productsModel');

describe('Busca os produtos no BD', () => {
  describe('quando não existe nenhum produto listado ou o produto buscado não existe', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[]]);
    });

    it('a função de buscar todos deve retornar um array vazio', async () => {
      const [result] = await productsModel.getAll();
      expect(result).to.be.an('array');
      expect(result).to.be.empty;
    });

    it('a função de buscar pelo id deve retornar um array vazio', async () => {
      const [result] = await productsModel.getById();
      expect(result).to.be.an('array');
      expect(result).to.be.empty;
    });
  })
})
