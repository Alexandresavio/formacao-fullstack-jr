/**
 * JavaScript é uma linguagem de tipagem fraca e dinâmica, não precisa declarar o tipo da variável
 * O tipo pode mudar durante a execução. O JS faz conversões automáticas (às vezes perigosas)
 */
let qualquer = "Legal";// declaração de variavel "qualquer" e atribuido o valor string
console.log(typeof qualquer); // mostra o tipo de dado da variavel

qualquer = 3.14; // Aqui a variavel recebe o valor numerico
console.log(typeof qualquer); //agora o valor é numérico

let valor = 10; // número
console.log(typeof(valor));

valor = "dez";  // agora virou string
console.log(valor); // "dez"
console.log(typeof(valor));
//A mesma variável mudou de tipo sem erro, houve uma reatribuição de valor de tipo diferente.


/**Conversão automática (coerção de tipo) */
console.log(5 + "5"); // "55"
//O JavaScript converte o número 5 para string automaticamente.

// 2º exemplo
console.log("10" - 2); // 8
//Aqui ele converte a string para número