/**
 * CONCEITO DE VARIÁVEIS
 * Variáveis são espaços reservados na memória para armazenar valores que podem ser alterados.
 */

/**
 * DECLARAÇÃO COM VAR:
 * Estrutura:
 * var nomeDaVariavel = valor
 */

var nome = "Sávio" // Declaração da variável + atribuição de valor

// O var permite redeclaração
var nome = "João"

console.log(nome) // João

/**
 * CARACTERÍSTICAS DO VAR
 *
 * - Escopo global ou de função
 * - NÃO respeita escopo de bloco {}
 * - Permite redeclaração
 * - Permite reatribuição
 * - Sofre hoisting
 */


//escopo global
{
  {
    {
      {
        var sera = 'Será?'
      }
    }
  }
}
console.log(sera);

if (true) {

  // A variável continua acessível fora do bloco
  var idade = 25

}
// Mesmo fora do bloco, o valor continua acessível
console.log(idade) // 25


//Var com escopo de função, aqui ela respeita o bloco pois tem escopo de funcao
function test(){
  var local = 123;
}
//console.log(local); retorna ReferenceError: local is not define


/**
 * LET
 *
 * Mais moderno e seguro.
 *
 * Foi introduzido no ES6 (2015)
 * para corrigir problemas do var.
 *
 * Estrutura:
 * let nomeDaVariavel = valor
 */
let nome2 = "Sávio"

// Reatribuição permitida
nome2 = "Paulo"

console.log(nome2) // Paulo
/**
 * CARACTERÍSTICAS DO LET
 *
 * - Escopo de bloco {} -> A variável existe apenas dentro do bloco.
 * - Permite reatribuição
 * - NÃO permite redeclaração no mesmo escopo
 */
// Declaração válida
let nome3 = "Sávio"


// let nome3 = "Maria" // Se tentar redeclarar retrona ERRO: Não é permitido redeclarar no mesmo escopo

console.log(nome3)

if (true) {

  let idade2 = 25
  //console.log(idade2) -> aqui a variavel esta acessivel

}
// ERRO: idade2 não existe fora do bloco
// console.log(idade2)


/**
 * CONST
 * Também foi introduzido no ES6.
 * Usado para valores que não devem ser reatribuídos.
 *
 * Estrutura:
 * const NOME = valor
 */
const nome4 = "Alexandre"

console.log(nome4) // Alexandre

/**
 * CARACTERÍSTICAS DO CONST
 *
 * - Escopo de bloco {}
 * - NÃO permite reatribuição
 * - NÃO permite redeclaração
 * - Deve ser inicializada na declaração
 */

// ERRO: Não é permitido redeclarar
// const nome4 = "Souza"

// ERRO: Não é permitido reatribuir
// nome4 = "Carlos"