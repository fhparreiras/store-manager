const productsModel = require('../models/productsModel');

const getProducts = () => {
    // if (id) {
    //     return productsModel.getById(id);
    // }
    console.log('Tentando a getProducts');
    return productsModel.getAll();
};

module.exports = { getProducts };
