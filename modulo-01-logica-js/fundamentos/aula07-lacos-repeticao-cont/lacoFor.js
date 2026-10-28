
// console.log("contando de 0 a 10");
// for(let i = 0; i <= 10; i++ ){
//     console.log(i);
// }

//FUP que solicite ao usuário qual tabuada deseja calcular

const PROMPT = require('prompt-sync')();
let numero = Number(PROMPT("Deseja calcular a tabuada de qual numero?"));
for(let i = 0; i <=10; i++){
    console.log(`${numero} X ${i} = ${numero * i}`);
}