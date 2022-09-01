const { product } = require('../db/config')
const { Op } = require('sequelize')

async function getProducts(req, res) {
    const { name, category } = req.query
    try {
        if (!name && !category) {
            const products = await product.findAll()
            res.json({
                products
            })
        } else if (name && !category) {
            const products = await product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            })
            res.json({
                products
            })
        }else{
            const products = await product.findAll({
                where:{
                    category: `${category}`
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