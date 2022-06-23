const mongoose = require('mongoose');
// Promise do mongoose foi depreciada 
// E agora estou definindo que ele deve usar a promisse do proprio node 
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/todo');