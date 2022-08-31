const { Router } = require('express');

const router = Router();
const productRoute = require('./products')
const categoriesRoute = require('./categories')

router.use('/products', productRoute);
router.use('/categories', categoriesRoute)
module.exports = router;
