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

async function getProductById(req,res){
    const {id} = req.params
    try {
        const productDetail = await product.findByPk(id)
        res.json({
            productDetail
        })
    } catch (error) {
        res.status(400).send({
            error
        })
    }
}

module.exports = {
    getProducts,
    getProductById
}