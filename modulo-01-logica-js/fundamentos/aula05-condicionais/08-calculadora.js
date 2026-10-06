// ============================================================
// CALCULADORA COM ENTRADA DO USUÁRIO
// ============================================================
// prompt-sync permite que o Node.js receba texto digitado no terminal.
// No navegador, você usaria a função global prompt() diretamente,
// que já vem embutida — sem precisar instalar nada.

// Descomente as linhas abaixo para testar (requer: npm install prompt-sync)

const prompt = require('prompt-sync')();

let v1 = Number(prompt("Primeiro número: "));
let v2 = Number(prompt("Segundo número: "));
let op = prompt("Operação (+, -, *, /): ");
let resultado;

switch (op) {
    case '+':
        resultado = v1 + v2;
        break;
    case '-':
        resultado = v1 - v2;
        break;
    case '*':
        resultado = v1 * v2;
        break;
    case '/':
        if (v2 !== 0) {
            resultado = v1 / v2;
        } else {
            console.log(" Erro: divisão por zero é matematicamente indefinida!");
            resultado = undefined;
        }
        break;
    default:
        console.log(" Operação inválida! Use +, -, * ou /");
        resultado = undefined;
        break;
}

if (resultado !== undefined) {
    console.log(`Resultado: ${v1} ${op} ${v2} = ${resultado}`);
}