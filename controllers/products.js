const { product } = require('../db/config')
const { Op } = require('sequelize')

async function getProducts(req, res) {
    const { name, category } = req.query
    try {
        if (!name && !category) {
            const products = await product.findAll()
            res.json({
                ok: true,
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
                ok: true,
                products
            })
        } else {
            const products = await product.findAll({
                where: {
                    category: `${category}`
                }
            })
            res.json({
                ok: true,
                products
            })
        }
    } catch (error) {
        res.status(400).send({
            ok: false,
            error
        })
    }
}
async function getProductById(req, res) {
    const { id } = req.params
    try {
        const productDetail = await product.findByPk(id)
        res.json({
            ok: true,
            productDetail
        })
    } catch (error) {
        res.status(400).send({
            ok: false,
            error
        })
    }
}

module.exports = {
    getProducts,
    getProductById
}