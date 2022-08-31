const {category} = require('../db/config')

async function getCategories(req,res){
    const categories = await category.findAll()
    res.json({
        categories
    })
}

module.exports = {
    getCategories
}