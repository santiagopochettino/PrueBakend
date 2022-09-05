//ejercicio de express

const express = require("express");
const app = express();
app.get("/", (req, res) =>{
    res.send('<h1 style="color: blue;" >BIENVEIDOS AL SERVER</h1>')
});
let contador = 0;
app.get("/visitas", (req, res) =>{
    contador++;
    res.send(`la cantidad de visitas es:${contador}`);
});
app.get("/fyh", (req, res)=>{
    const fecha = new Date();
    res.send({fecha: fecha.toLocaleString()});
});

//listen
const server = app.listen(8080, ()=>{
    console.log("Servidor iniciado");
})