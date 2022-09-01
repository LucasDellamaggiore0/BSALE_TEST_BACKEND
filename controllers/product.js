const { product } = require('../db/config')
const { Op } = require('sequelize')

async function getProducts(req, res) {
    const { name } = req.query
    try {
        if (!name) {
            const products = await product.findAll()
            res.json({
                products
            })
        } else {
            const products = await  product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            })
            res.json({
                products
            })
        }
    } catch (error) {
        res.status(400).send({
            error
        })
    }

}

module.exports = {
    getProducts
}