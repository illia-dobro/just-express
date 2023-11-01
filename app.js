const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
  console.log(req.body);
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
