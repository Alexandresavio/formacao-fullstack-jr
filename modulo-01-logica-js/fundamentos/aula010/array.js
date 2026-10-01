/**
 * O que é um Array?
 * Um array é uma estrutura usada para agrupar múltiplos valores
 * dentro de uma única variável.
 *
 * Ele é uma estrutura:
 * - Linear
 * - Indexada
 * - Com acesso por posições numéricas
 *
 * Os índices começam em 0.
 */

// Índices:      [ 0,   1,   2,   3 ]
const valores = [7.7, 8.9, 6.3, 9.2];
// Acessando elementos do array pelos índices
console.log(valores[0], valores[3]);

// Índice inexistente retorna undefined
console.log(valores[4]);

// Adicionando um novo elemento ao array
valores[4] = 10;
console.log(valores);

// Retorna a quantidade de elementos do array
console.log(valores.length);

/**
 * Em JavaScript, arrays:
 * - Crescem e diminuem dinamicamente
 * - Aceitam diferentes tipos de dados
 * - São heterogêneos
 *
 * Um array pode conter:
 * - Números
 * - Objetos
 * - Booleanos
 * - Strings
 * - null
 *
 * Apesar disso, misturar tipos diferentes não é uma boa prática.
 * O ideal é manter arrays organizados com dados do mesmo tipo.
 */

// Adiciona novos elementos ao final do array
valores.push({ id: 3 }, false, null, 'teste');
console.log(valores);

// Remove o último elemento do array e o retorna
console.log(valores.pop());

// Remove o elemento do índice 0
delete valores[0];
console.log(valores);

// Arrays em JavaScript são do tipo object
console.log(typeof valores);