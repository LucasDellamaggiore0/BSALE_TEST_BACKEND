const {product, category} = require('../db/config')


async function getProducts(req,res){
    const products = await product.findAll({
        include: [
            {model: category}
        ]
    })
    res.json({
        products
    })
}

module.exports = {
    getProducts
}