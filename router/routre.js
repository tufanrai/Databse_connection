const express = require('express')
const router = express.Router() // invoking the router from express
const {hero, product, insertProduct, productId, errHandler} = require('../controller/product.controll') // importing the request responce handler functions

router.get('/home', hero)
router.get('/product', product)
router.post('/product', insertProduct)
router.get('/product/:id', productId)
router.get('/*S', errHandler)

module.exports = router // exporting the router