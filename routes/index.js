const { Router } = require('express');

const router = Router();
const productRoute = require('./products')
const categoriesRoute = require('./categories')
const productDetail = require('./productDetail')

router.use('/products', productRoute);
router.use('/categories', categoriesRoute)
router.use('/productDetail', productDetail)
module.exports = router;
