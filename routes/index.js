const { Router } = require('express');

const router = Router();
const productRoute = require('./products')
const categoriesRoute = require('./categories')
const productDetailRoute = require('./productDetail')

router.use('/', productRoute);
router.use('/categories', categoriesRoute)
router.use('/productDetail', productDetailRoute)
module.exports = router;
