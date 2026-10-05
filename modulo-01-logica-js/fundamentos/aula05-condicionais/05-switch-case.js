// ============================================================
// BLOCO 6 — SWITCH (quando há muitas opções fixas)
// ============================================================
// O switch é como um cardápio: você escolhe uma opção e ele executa o item correspondente.
// É mais legível que vários else if quando os valores são exatos e fixos.
// Internamente, o switch usa igualdade estrita (===) para comparar os cases.

// Sintaxe:
// switch (expressão) {
//   case valor1: ... break;
//   case valor2: ... break;
//   default: ...  break;   ← executado se nenhum case bater (equivale ao else)
// }

// IMPORTANTE: sem o break, o código "cai" no próximo case automaticamente.
// Esse comportamento se chama "fall-through" e é uma fonte clássica de bugs.

let diaDaSemana = new Date().getDay();  // 0=domingo, 1=segunda, ..., 6=sábado

switch (diaDaSemana) {
    case 0:
        console.log("Domingo: dia de descanso ");
        break;
    case 1:
        console.log("Segunda-feira: começo de semana! ");
        break;
    case 2:
        console.log("Terça-feira: seguindo em frente.");
        break;
    case 3:
        console.log("Quarta-feira: metade da semana! ");
        break;
    case 4:
        console.log("Quinta-feira: quase lá!");
        break;
    case 5:
        console.log("Sexta-feira: FINALMENTE! ");
        break;
    case 6:
        console.log("Sábado: fim de semana! ");
        break;
    default:
        console.log("Dia inválido.");
        break;
}

// Fall-through intencional — agrupando cases que fazem a mesma coisa:
// Cases sem break "caem" para o próximo. Isso pode ser usado a favor:
let mes = 4;  // abril
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Mês com 31 dias");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Mês com 30 dias");  // ← cai aqui (mês 4 = abril)
        break;
    case 2:
        console.log("Fevereiro: 28 ou 29 dias");
        break;
    default:
        console.log("Mês inválido");
        break;
}

// Nível de acesso — um uso clássico do switch:
let nivelAcesso = 2;  // 1=admin, 2=editor, 3=visitante

switch (nivelAcesso) {
    case 1:
        console.log("Acesso TOTAL — pode fazer tudo");
        break;
    case 2:
        console.log("Acesso RESTRITO — pode editar conteúdo");
        break;
    case 3:
        console.log("Acesso SOMENTE LEITURA");
        break;
    default:
        console.log("Nível de acesso inválido!");
        break;
}

// switch(true) — para testar FAIXAS de valor (não valores exatos):
// Aqui cada case é uma expressão booleana. O switch compara true === case,
// ou seja, executa o primeiro case cuja expressão retornar true.
let idadePessoa = 25;

switch (true) {
    case (idadePessoa >= 0 && idadePessoa <= 12):
        console.log("Criança");
        break;
    case (idadePessoa >= 13 && idadePessoa <= 17):
        console.log("Adolescente");
        break;
    case (idadePessoa >= 18 && idadePessoa <= 59):
        console.log("Adulto ");  // ← cai aqui (25 está entre 18 e 59)
        break;
    case (idadePessoa >= 60):
        console.log("Idoso ");
        break;
    default:
        console.log("Idade inválida");
        break;
}


