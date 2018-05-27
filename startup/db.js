const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect('mongodb://localhost/movie-rent-db')
        .then(() => winston.info('Connected to MongoDB'));
}