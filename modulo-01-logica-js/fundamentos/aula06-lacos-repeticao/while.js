
/**
 * while — “enquanto for verdadeiro”
 * O while executa um bloco de código enquanto a condição for verdadeira.
 */
let num = 0;
console.log(`contando...`);
while(num <=10){
    console.log(`${num}`);
    num++;
}

console.log(`\n Contagem regressiva...`);
let num2 = 10;
while(num2 >= 0){
    console.log(`${num2}`);
    num2--
}

//somar os numeros de 1 ate 10
let contador = 1;
let soma = 0;
while(contador <= 10){
    soma += contador;
    contador++;
}
console.log(`Toatal da soma é: ${soma}`);

// Solitar ao usuário um numero e mostrar a tabuada deste numero
const prompt = require('prompt-sync')();

let cont = 0;
let valor = prompt("Desja calcular a tabuada de qual valor?")

while(cont <= 10){
    let resultado = (cont * valor);
    let tabuada = (`${cont} X ${valor} = `);
}