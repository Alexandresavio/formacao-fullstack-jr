console.log(7/0); // No JavaScript, dividir um número por zero não gera erro.
// O resultado é Infinity.

console.log(7/0.01);// Dividir por um número decimal funciona normalmente.
// Resultado: 700

console.log("10"/2); 
// O JavaScript faz conversão automática de tipos (type coercion),
// convertendo a string "10" para número.

console.log("10.2"/2);// A string "10.2" é convertida automaticamente para número decimal.

console.log("10"+2);
// Quando usamos + com string, ocorre concatenação.
// Resultado: "102"

console.log("Show"*2);
// O JavaScript tenta converter "Show" para número,
// mas como isso não é possível, o resultado é NaN (Not a Number).

/*
Computadores representam números decimais em binário.
Alguns valores decimais não podem ser representados exatamente,
o que causa pequenas imprecisões em operações com ponto flutuante.
*/
console.log(0.1 + 0.7);

/*
O JavaScript interpreta 10. como um número decimal,
então o método após o ponto causa ambiguidade de sintaxe.
*/
// console.log(10.toString()) // Gera erro!

console.log((10.354).toFixed(2));
// Arredonda o número para 2 casas decimais.
// Resultado: string "10.35"