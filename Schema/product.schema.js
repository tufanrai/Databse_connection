const { Schema, model} = require('mongoose')

const productScheema = new Schema({ // initializing the data structure/ how the should look like
    name: {
        type: String,
        require: true,
        unique: true,
    },
    discription: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    }
})

const Product = model('product', productScheema) // performs CRUD functionality 
module.exports = Product // exporting the product schema 