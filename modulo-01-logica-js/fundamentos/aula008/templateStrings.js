const escola ="cod3r";

console.log(escola.charAt(4));
/**
 * charAt(4) pega o caractere na posição 4 da string.
 * A contagem começa em 0.
 * String: "c o d 3 r"
 * Índices: 0 1 2 3 4
 */

console.log(escola.charAt(5));
/**
 * Aqui tenta pegar o caractere da posição 5.
 * Mas a string só vai até o índice 4.
 * Resultado: "" (string vazia)
 */


console.log(escola.charCodeAt(3));
/**
 * charCodeAt(3) pega o código Unicode do caractere no índice 3.
 * O código unicode é o 51.
 */

console.log(escola.indexOf(3));
/**
 * 
 */

console.log(escola.substring(1));
/**
 * substring(1) pega a string a partir do índice 1 até o final.
 * String: "cod3r"
 * Começando no índice 1: "od3r"
 */

console.log(escola.substring(0, 3));
/**
 * substring(0, 3) pega do índice 0 até o índice 3, mas não inclui o 3.
 * Ou seja, pega índices: 0, 1, 2
 * Resultado: "cod"
 */

console.log('Escola '.concat(escola).concat('!'));
/**
 * concat() junta strings.
 * Primeiro junta 'Escola ' com o valor da variavel escola, depois adiciona '!'.
 * Resultado: "Escola cod3r!"
 */

console.log(escola.replace(3, 'e'));
/**
 * replace(3, 'e') substitui o primeiro 3 encontrado por 'e'.
 * "cod3r" vira "coder"
 * Resultado: "coder"
 */

console.log('Ana, Maria, Pedro'.split(','));
/**
 * split(',') divide a string sempre que encontrar ,
 * Isso gera um array (lista).
 * Resultado: ["Ana", " Maria", " Pedro"]
 */