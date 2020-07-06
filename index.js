const express = require('express');

const app = express();
const products = ['Apple', 'Melon', 'Banana'];

app.get('/', (req, res, next) => {
    res.send(`It's working!`);
});

app.get('/products', (req, res, next) => {
    console.log('Page', req.query.page);       //localhost:5000/products?page=#

    res.json({products});
});

app.get('/products/:id', (req, res, next) => {
    if (products[req.params.id]) {
        res.send(products[req.params.id]);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(5000, _ => {
    console.log(`Server is starting... ${new Date()}`);
});