// Solitar ao usuário um numero e mostrar a tabuada deste numero
const prompt = require('prompt-sync')();

let cont = 0;
let valor = Number(prompt("Desja calcular a tabuada de qual valor? "));

while(cont <= 10){
    let resultado = (cont * valor);
    console.log(`${cont} X ${valor} = ${resultado}`);
    cont++;
}
