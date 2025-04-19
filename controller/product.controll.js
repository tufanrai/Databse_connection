const Product = require('../Schema/product.schema') // accessing the products schema 

const hero = (req,res) => { // sends a response to the request sent by the user in the main page
    res.send('this is a home page')
}

const product = async (req,res) => { // sends logs all the data form the database as a responce to the request of the client
    try{
        const Products = await Product.find() // gets all the data from the database 
        console.log(Products)
        res.send('products list') // sends a responce message to the user
    } catch (err) {
        console.log(err)
    }
}

const insertProduct = async (req,res) => { // adds new product to the database 
    try{
        const newProduct = await Product.create(req.body, {new: true}) // inserts new data in the database
    .then(res.status(201).send('product added successfuly')) // sends the responce message to the user if success
    .catch(err =>{ throw err}) // throws err if failed 
    console.log(newProduct)
    } catch (err) {
        console.log(err)
    }
}

const productId = async (req,res) => { // sends the product detail as a response with the id that the user send as a request
    try {
        const productDetail = await Product.findById(req.params.id) // finds the product by its' and returns the data as a responce to the user
        console.log(productDetail)
        res.send('this is a product sectiong with id') // responce user with a message
    } catch (err) {
        console.log(err)
    }
}

const errHandler = (req,res) => { // sends 'file not found' message to the client as a responce to the request given by the client 
    res.status(404).send('the product your are searching for is not found')
}

module.exports = { // exporting all the req,res controller.
    hero,
    product,
    insertProduct,
    productId,
    errHandler
}