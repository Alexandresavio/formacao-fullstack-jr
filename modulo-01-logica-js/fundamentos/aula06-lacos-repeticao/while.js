
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