'use strict'


const express = require('express');
const productController = require('../controllers/productController'); 
const productRouter = express.Router();


productRouter.post('/saveProduct', productController.saveProduct);
productRouter.get('/getProductById', productController.getProductById);
productRouter.get('/getProducts', productController.getProducts);
productRouter.post('/updateProduct', productController.updateProduct);
productRouter.delete('/deleteProduct', productController.deleteProduct);

//export
module.exports = productRouter;



