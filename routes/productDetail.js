const {Router} = require('express');
const { getProductById } = require('../controllers/products');
const router = Router()


router.get('/:id', getProductById)

module.exports = router