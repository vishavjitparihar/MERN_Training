// All of the logic is in this file

const Product = require('../models/Product.model.js'); //as it will be talking directly to the models


//find all product
const findAllProduct = async () => {
    const product = await Product.find(); //this will find all the products
    return product;
};

const findProductByID = async (id) => {
    //not finding an object id will not throw an error, so we need to throw error manually
    try {
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        throw err;
    }
};



module.exports = { findAllProduct, findProductByID };