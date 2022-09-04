const {category} = require('../db/config')

async function getCategories(req,res){
    try {
        const categories = await category.findAll()
        res.json({
            ok: true,
            categories
        })    
    } catch (error) {
        res.status(400).send({
            ok:false,
            error
        })
    }
}

module.exports = {
    getCategories
}