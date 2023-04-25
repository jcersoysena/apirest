const {Router} = require('express');

const router = new Router();
const metodito = require('underscore');

const productos = require('../bdproducts.json');

router.get('/', (req, res) =>{
    res.json(productos)
});

router.post('/', (req, res) =>{
    const{nombreProd, cantidad, precio, estado} = req.body;
    const id = productos.length + 1; 
    if (nombreProd, cantidad, precio, estado) {
        const newProduct = {...req.body, id};
        productos.push(newProduct);
        res.json(productos);
       } else{
        res.status(500).json({error: 'posible error.'});
       }
});
