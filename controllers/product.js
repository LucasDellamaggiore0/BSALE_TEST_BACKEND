const {product, category} = require('../db/config')


async function getProducts(req,res){
    const products = await product.findAll()
    res.json({
        products
    })
}

module.exports = {
    getProducts
}