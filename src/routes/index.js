const {Router} = require('express');
const router = new Router();

router.get('/test',(req, res)=>{
    const data = {
        "programa": "ADSO",
        "Tema": 'API Rest'
    };
    res.json(data);
});

module.exports = router;