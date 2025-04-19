const express = require('express')
const router = require('./router/routre.js') // invoking the router form the express
const Database = require('./Dbconnection/dbconnect.js') // invoking the database connector funciton

const app = express()
Database() // inside here send your database connectiong URL

app.use(express.urlencoded()) // expersss' inbuilt middlewawre used to fetch the data from server
app.use('/', router) // applying the router level req res handeling 

app.listen(8000, () => console.log('server has started at http://localhost:8000'))