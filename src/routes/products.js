const {Router} = require('express');

const router = new Router();
const metodito = require('underscore');

const productos = require('../bdproducts.json');

router.get('/', (req, res) =>{
    res.json(productos);
});

router.post('/', (req, res) =>{
    const{nombreProd, cantidad, precio, estado} = req.body;
    const id = productos.length + 1; 
    if (nombreProd && cantidad && precio && estado) {
        const newProduct = {...req.body, id};
        productos.push(newProduct);
        res.json(productos);
       } else{
        res.status(500).json({error: 'posible error.'});
       }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {nombreProd, cantidad, precio, estado} = req.body;
    if (id&&nombreProd && cantidad && precio && estado){
        metodito.each(productos,(prod, i) =>{
            if(prod.id === id){
                prod.nombreProd = nombreProd;
                prod.cantidad = cantidad;
                prod.precio = precio;
                prod.estado = estado
            }
        });
        res.json(productos);
      } else {
        res.status(500).json({error: 'positivo para error'});
      }
    
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  if (id) {
    metodito.each(productos, (prod, i) => {
        if (prod.id === id) {
            productos.splice(i, 1);
        }
    }); res.json(productos);
  }  
});
module.exports = router;