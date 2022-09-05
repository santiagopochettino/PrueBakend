const http = require("http");

const server = http.createServer((peticion, respuesta)=>{
    respuesta.end("Hola coder!")
});
server.listen(8081, ()=>{
    console.log("Servidor activo en el puerto");
});