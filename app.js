const mongoose = require('mongoose');
const express = require('express');

const genres = require('./routes/genres');
const customers = require('./routes/customers');

const app = express();

mongoose.connect('mongodb://localhost/movie-rent-db')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Colud not connect', err));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));