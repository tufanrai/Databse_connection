const mongoose = require('mongoose')

const Database = (url) => {
    mongoose.connect(url) // connects the server to the database of whose the url has been assigned
    .then(console.log('database connectiong success')) // if connected the promise log the message
    .catch(err => console.log(err)) // if fails the promise logs the error
}

module.exports = Database //exports the function 