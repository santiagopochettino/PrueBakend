const numeros = {
    
}
//funcion que genera num al azar del 1 al 20
function numAleatorio(){
    // 1 al 20
    return parseInt(Math.random() * 20 )+1;

}
for (let i = 0; i<10000; i++){
    console.log(numAleatorio());
    const alAzar = numAleatorio()
     if(!numeros[alAzar]){
        numeros[alAzar] = 0;
     }
     numeros[alAzar]++;
}
console.log(numeros);

