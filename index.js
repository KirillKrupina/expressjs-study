const express = require('express');

const app = express();

app.get('/', (req, res, next) =>{
    res.send(`It's working!`);
});

app.listen(5000, _ =>{
    console.log(`Server starting... ${new Date()}`);
    
});