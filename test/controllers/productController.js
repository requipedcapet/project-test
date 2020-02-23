'use strict'

const validator = require('validator');
const productSchema = require('../models/product');

const productController = {
    saveProduct: (req, res) =>{
     
        var params = req.body;
        console.log(params);
        
        try {
            var validateName = !validator.isEmpty(params.name);
            var validateSize = !validator.isEmpty(params.size);
            var validateDateInserted = !validator.isEmpty(params.dateInserted);
            var validateDescription = !validator.isEmpty(params.description);

        } catch (err) {
            return res.status(200).send({
                message: 'Faltan datos por enviar' + err
            })
        }
        

        if(validateName && validateSize && validateDateInserted && validateDescription){
            var product = new productSchema();

            product.name = params.name;
            product.size = params.size;
            product.DateInserted = params.validateDateInserted;
            product.description = params.description;
            params.image != null ? product.image = params.image : product.image = "none"; 

            product.save((err, productSaved) =>{
                if(err || !productSaved){
                    return res.status(404).send({
                        status: 'error',
                        message: 'product not saved' 
                    });
                }

                return res.status(200).send({
                    message: 'product saved'
                })

            })

        }else{
            return  res.status(500).send({
                message: 'incorrect data params'
            });
        }

    },
    getProductById: (req, res) =>{

    },
    getProducts: (req, res) =>{

    },
    updateProduct: (req, res) =>{

    },
    deleteProduct: (req, res) =>{

    }
};

//exports
module.exports = productController;