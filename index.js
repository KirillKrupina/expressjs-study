const express = require('express');
const booksRouter = express.Router();

const app = express();
const products = ['Apple', 'Melon', 'Banana'];

app.use((req, res, next) => {
    console.log(`Date: ${new Date()}. Method: ${req.method}. URL: ${req.originalUrl}. IP: ${req.ip}`);
    next();
});

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.send(`It's working!`);
});

app.get('/products', (req, res, next) => {
    //console.log('Page', req.query.page); //localhost:5000/products?page=#

    res.json({
        products
    });
});

app.get('/products/:id', (req, res, next) => {
    if (products[req.params.id]) {
        res.send(products[req.params.id]);
    } else {
        res.status(404).send('Product not found');
    }
});


booksRouter.get('/', (req, res) => {
    res.send('Books');
});

booksRouter.get('/about', (req, res) => {
    res.send('About books');
});

app.use('/books', booksRouter);

app.use('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    console.log('Middleware');
    next();
});

app.get('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    console.log('/user/:id');
    res.send('USER');
});

app.get('/blog', (req, res, next) => {
    res.redirect('https://www.youtube.com/');
});

app.get('/getDownloadBooks', (req, res, next) => {
    res.download('./public/books.txt', 'anotherFileName', (err)=>{
        console.log(`File sent!`);
        
    });
});

app.use((err, req, res, next) =>{
    console.log(err.stack);
    res.status(500).send(err.stack);
    
});

app.listen(5000, _ => {
    console.log(`Server is starting... ${new Date()}`);
});