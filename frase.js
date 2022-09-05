const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
const frase = 'Hola mundo como estan'
// 1)
app.get('/api/getFrase', (req, res)=>{
res.send({frase});
});
//2)
app.get('/api/getLetra', (req, res)=>{
    const {num}=req.params
    res.send(frase[num -1 ]);

});
//3)
app.get('/api/getPalabra/:num', (req, res)=>{
    
    const {num}=req.params
    if(isNaN(parseInt(num))){
        res.status(400).send({error: true, msg:"no numerico"})
    }else {
        const palabras = frase.split(" ");
        res.send(palabras[num -1]);
    }
});
app.put('/api/:id', (req, res)=>{
    res.send({metodo: 'put', body: req.body ,params: req.params});
});
app.delete('/api/:id', (req, res)=>{
    res.send({metodo: 'delete', params: req.params});
})




app.listen(8080, ()=>{
    console.log("Iniciado!");
});