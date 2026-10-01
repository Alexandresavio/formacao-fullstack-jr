// Cria uma constante chamada peso1 com valor decimal 1.0
const peso1 = 1.0;

// Converte o texto '2.0' para número e armazena em peso2
const peso2 = Number('2.0');

// Exibe os valores das variáveis peso1 e peso2 no console
console.log(peso1, peso2);

// Verifica se peso1 é um número inteiro
// Retorna true porque 1.0 é considerado inteiro no JavaScript
console.log(Number.isInteger(peso1));

// Verifica se peso2 é um número inteiro
// Retorna true porque o valor é 2
console.log(Number.isInteger(peso2));

// Cria uma constante com a primeira nota
const avaliacao1 = 9.871;

// Cria uma constante com a segunda nota
const avaliacao2 = 6.871;

// Calcula o total da média ponderada
// Fórmula: (nota1 * peso1) + (nota2 * peso2)
const total = (avaliacao1 * peso1) + (avaliacao2 * peso2);

// Calcula a média dividindo o total pela soma dos pesos
const media = total / (peso1 + peso2);

// Exibe a média com apenas 2 casas decimais
// toFixed(2) retorna uma string formatada
console.log(media.toFixed(2));

// Converte o valor da média para texto (string)
console.log(media.toString());

// Exibe o tipo da variável media
// O resultado será "number"
console.log(typeof media);

// Converte o número para representação binária (base 2)
// toString(2) transforma o número em texto binário
console.log(media.toString(2)); // converte para binário