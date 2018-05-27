const winston = require('winston');

module.exports = function(err, req, res, next) {
    winston.log()
    res.status(500).send('Something faile.');
}