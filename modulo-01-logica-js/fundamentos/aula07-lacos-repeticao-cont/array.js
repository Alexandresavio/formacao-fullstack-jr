/* =======================================================================
  CONCEITO DE ARRAYS EM JAVASCRIPT
  
  Um array é uma estrutura que armazena vários valores em uma única
  variável, organizados em sequência e acessados por um índice numérico.
  
  Pense em um array como uma prateleira numerada:
  Posição:  [0]      [1]       [2]      [3]
  Valor:   "Maçã"  "Banana"  "Uva"   "Pêra"
 =======================================================================*/

// 1. CRIANDO ARRAYS

/**
 * Array com colchetes (forma mais comum)
 * Os valores ficam entre colchetes [], separados por vírgula.
 */
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Pêra"];
console.log(frutas);
let numeros = [10, 20, 30, 40, 50];
console.log(numeros);

/**
 * Array vazio (será preenchido depois)
 * Muito comum quando não sabemos os valores no início do programa.
 */
let listaVazia = [];
console.log("Lista vazia ", listaVazia);

/**
 * Array misto (diferentes tipos de dados)
 * JavaScript permite misturar tipos, mas na prática evitamos isso
 * para manter o código organizado e previsível.
 */
let listaMista = ["João", 25, true, 1.75];

/**
 * Array de objetos (muito usado no mundo real)
 * Cada elemento é um objeto com várias propriedades(par chave:valor).
 * Este é o padrão mais encontrado em aplicações reais.
 */
let listaObjetos = [
  { nome: "Ana", nota: 9.5 },
  { nome: "Carlos", nota: 7.0 },
  { nome: "Beatriz", nota: 8.5 },
];
console.log(listaObjetos);

/**
 * =====================================================================
 * 2. ACESSANDO ELEMENTOS
 * ===================================================================== 
 */
let cores = ["Vermelho", "Verde", "Azul", "Amarelo", "Roxo"];
// O índice SEMPRE começa em 0, não em 1!

console.log("Primeira cor (índice 0):", cores[0]); // Vermelho
console.log("Terceira cor (índice 2):", cores[2]); // Azul
console.log("Última cor (índice 4):", cores[4]); // Roxo

/**
 * Acessando o último elemento de forma dinâmica
 * Se não soubermos o tamanho do array, usamos .length - 1 para o último.
 * .length retorna 5 (quantidade de elementos), mas o último índice é 4.
 *  Por isso subtraímos 1: length - 1 = índice do último elemento.
 */
console.log("\nTamanho do array:", cores.length);
console.log("Último elemento (dinâmico):", cores[cores.length - 1]); // Roxo

/**
 * Acessando elemento que não existe
 * Se tentar acessar um índice fora do array, retorna undefined (não dá erro).
 */
console.log("Índice inexistente (10):", cores[10]); // undefined

/**
 * Modificando um elemento
 * Basta referenciar o índice e atribuir um novo valor com =
 *
 */
console.log("\nAntes da modificação:", cores[1]); // Verde
cores[1] = "Verde Escuro";
console.log("Depois da modificação:", cores[1]); // Verde Escuro

/**
 * Acessando propriedades em array de objetos
 * Usamos array[índice].propriedade para acessar dados dentro de objetos.
 */
let aluno = [
  { nome: "Ana", nota: 9.5 },
  { nome: "Carlos", nota: 7.0 },
  { nome: "Beatriz", nota: 8.5 },
];
console.log("\nNome do primeiro aluno:", aluno[0].nome); // Ana
console.log("Nota do aluno:", aluno[0].nota); // 9.5

/**
 * =====================================================================
 * 3. ADICIONANDO E REMOVENDO ELEMENTOS
 * =====================================================================
 */
let animais = ["Gato", "Cachorro", "Pássaro"]
console.log("Array inicial:", animais);

 // unshift() — Adiciona no INÍCIO
 animais.unshift("Aguia");
 console.log(animais);

// push() — Adiciona no FINAL - É o método mais usado para inserir novos elementos.
animais.push("Peixe");
console.log(animais);

//pop() — Remove do FINAL - Também retorna o elemento removido, que podemos guardar numa variável.
animais.pop();
console.log("Elemento removido pelo pop():", animais); // elemento removido Peixe

//shift() — Remove do INÍCIO
animais.shift();
console.log("Após shift():", animais) //elemento removido do inicio "Aguia"
console.log("Elemento removido pelo shift():", animais);

//splice() — Remove ou insere em qualquer posição - splice(índice, quantidadeParaRemover, ...itensParaInserir)
let linguagens = ["HTML", "CSS", "Python", "JavaScript", "Java"];
console.log("Array original:", linguagens);

// Remove 1 elemento a partir do índice 2 (remove "Python")
linguagens.splice(2, 1)
console.log("Após splice(2, 1):", linguagens) // ["HTML", "CSS", "JavaScript", "Java"]

// Insere "TypeScript" no índice 2 sem remover nada (quantidade = 0)
linguagens.splice(2, 0, "TypeScript")
console.log("Após splice(2, 0, 'TypeScript'):", linguagens) // ["HTML", "CSS", "TypeScript", "JavaScript", "Java"]

// =====================================================================
// 4. PERCORRENDO ARRAYS (ITERAÇÃO)
// =====================================================================

let produtos = ["Notebook", "Mouse", "Teclado", "Monitor", "Headset"];
/**
 * for clássico 
 * O mais completo: temos acesso ao índice e ao valor. 
 * Ideal quando precisamos saber a posição de cada elemento.
 */
console.log("--- for clássico ---")
for(let i = 0; i < produtos.length; i++){
  console.log("Posição " + i + ": " + produtos[i])
}

/**
 * for...of
 * Mais simples e legível quando só precisamos do VALOR, não do índice.
 * A variável 'produto' recebe automaticamente cada elemento a cada volta.
 */
console.log("\n--- for...of ---")
for(let produto of produtos){
  console.log(produto);
}

/**
 * forEach() 
 * Método nativo do array. Recebe uma função que é chamada para cada elemento.
 * Parâmetros disponíveis: (elemento, índice, arrayCompleto)
 */
console.log("\n--- forEach() ---")
produtos.forEach(function(produto, indice) {
    console.log(indice + " → " + produto)
});

// Com arrow function (forma moderna e mais curta):
console.log("\n--- forEach() com arrow function ---")
produtos.forEach((produto, indice) => {
    console.log(indice + " → " + produto)
})

// =====================================================================
// 5. MÉTODOS DE BUSCA
// =====================================================================

console.log("\n\n========== 5. MÉTODOS DE BUSCA ==========\n")

let times = ["Grêmio", "Internacional", "Flamengo", "Corinthians", "Palmeiras"]

// ----- 5.1: indexOf() — Retorna o índice de um elemento -----
// Retorna -1 se o elemento não existir no array.
console.log("Índice do 'Flamengo':",      times.indexOf("Flamengo"))     // 2
console.log("Índice do 'Vasco':",         times.indexOf("Vasco"))         // -1 (não existe)

// ----- 5.2: includes() — Verifica se um elemento existe (true/false) -----
// Mais direto que indexOf() quando só queremos saber se existe ou não.
console.log("\nInclui 'Corinthians'?", times.includes("Corinthians"))  // true
console.log("Inclui 'Santos'?",       times.includes("Santos"))        // false

// ----- 5.3: find() — Retorna o primeiro elemento que satisfaz uma condição -----
// Muito útil com arrays de objetos. Retorna o objeto inteiro, não só o índice.
let funcionarios = [
    { id: 1, nome: "Lucas",   salario: 3500 },
    { id: 2, nome: "Mariana", salario: 5200 },
    { id: 3, nome: "Pedro",   salario: 4100 },
    { id: 4, nome: "Juliana", salario: 6800 }
]
// Encontra o primeiro funcionário com salário acima de 5000
let primeiroCaro = funcionarios.find(func => func.salario > 5000)
console.log("\nPrimeiro funcionário com salário > 5000:", primeiroCaro)
// { id: 2, nome: 'Mariana', salario: 5200 }

// ----- 5.4: findIndex() — Retorna o índice do primeiro elemento encontrado -----
let indicePedro = funcionarios.findIndex(func => func.nome === "Pedro")
console.log("Índice do Pedro:", indicePedro)   // 2


// =====================================================================
// 6. MÉTODOS DE TRANSFORMAÇÃO
// =====================================================================

console.log("\n\n========== 6. MÉTODOS DE TRANSFORMAÇÃO ==========\n")

// ----- 6.1: filter() — Cria um novo array com elementos que passam no teste -----
// O array original NÃO é modificado. Um novo array filtrado é retornado.
let idades = [15, 22, 17, 30, 14, 25, 19]
let maioresDeIdade = idades.filter(idade => idade >= 18)
console.log("Idades originais:", idades)
console.log("Maiores de 18:",    maioresDeIdade)   // [22, 30, 25, 19]

// Com array de objetos:
let funcionariosBemPagos = funcionarios.filter(func => func.salario >= 4000)
console.log("\nFuncionários com salário >= 4000:")
funcionariosBemPagos.forEach(func => {
    console.log("  " + func.nome + ": R$ " + func.salario)
})

// ----- 6.2: map() — Cria um novo array transformando cada elemento -----
// Para cada elemento, aplica uma função e coloca o resultado no novo array.
let precos = [100, 250, 80, 320, 150]
let precosComDesconto = precos.map(preco => preco * 0.9)   // 10% de desconto
console.log("\nPreços originais:", precos)
console.log("Com 10% desconto:", precosComDesconto)

// Extraindo apenas os nomes dos funcionários:
let nomesFuncionarios = funcionarios.map(func => func.nome)
console.log("\nApenas os nomes:", nomesFuncionarios)
// ["Lucas", "Mariana", "Pedro", "Juliana"]

// ----- 6.3: reduce() — Reduz o array a um único valor -----
// Acumula um resultado percorrendo todos os elementos.
// reduce((acumulador, elementoAtual) => operação, valorInicial)
let valores = [10, 20, 30, 40, 50]
let totalReduce = valores.reduce((acumulador, valor) => acumulador + valor, 0)
// Passo a passo:
// volta 1: acumulador=0  + valor=10  = 10
// volta 2: acumulador=10 + valor=20  = 30
// volta 3: acumulador=30 + valor=30  = 60
// volta 4: acumulador=60 + valor=40  = 100
// volta 5: acumulador=100+ valor=50  = 150
console.log("\nArray:", valores)
console.log("Soma com reduce():", totalReduce)   // 150

// Calculando o total de salários:
let totalSalarios = funcionarios.reduce((acc, func) => acc + func.salario, 0)
console.log("Total da folha de pagamento: R$ " + totalSalarios)


// =====================================================================
// 7. ORDENAÇÃO
// =====================================================================

console.log("\n\n========== 7. ORDENAÇÃO ==========\n")

// ----- 7.1: sort() com strings -----
// Por padrão, sort() ordena como texto (alfabeticamente).
// CUIDADO: ele modifica o array original!
let nomes = ["Carlos", "Ana", "Beatriz", "Diego", "Amanda"]
console.log("Antes do sort():", nomes)
nomes.sort()
console.log("Após sort():",     nomes)
// ["Amanda", "Ana", "Beatriz", "Carlos", "Diego"]

// ----- 7.2: sort() com números — PRECISA de função de comparação -----
// sort() sem função compara como texto: "10" vem antes de "9" (errado para números!)
let numerosParaOrdenar = [40, 5, 100, 3, 25]
console.log("\nNúmeros antes do sort():", numerosParaOrdenar)

// ERRADO — ordena como texto:
let ordemErrada = [...numerosParaOrdenar].sort()
console.log("Sort SEM função (errado):", ordemErrada)
// [100, 25, 3, 40, 5] — errado!

// CERTO — passamos uma função de comparação:
// Se (a - b) for negativo, 'a' vem antes. Se positivo, 'b' vem antes.
let ordemCrescente = [...numerosParaOrdenar].sort((a, b) => a - b)
let ordemDecrescente = [...numerosParaOrdenar].sort((a, b) => b - a)
console.log("Sort crescente (correto):", ordemCrescente)    // [3, 5, 25, 40, 100]
console.log("Sort decrescente:",         ordemDecrescente)  // [100, 40, 25, 5, 3]

// ----- 7.3: reverse() — Inverte a ordem do array -----
let letras = ["a", "b", "c", "d", "e"]
console.log("\nAntes do reverse():", letras)
letras.reverse()
console.log("Após reverse():", letras)   // ["e", "d", "c", "b", "a"]


// =====================================================================
// 8. OUTROS MÉTODOS ÚTEIS
// =====================================================================

console.log("\n\n========== 8. OUTROS MÉTODOS ÚTEIS ==========\n")

// ----- 8.1: slice() — Copia uma parte do array -----
// slice(início, fim) — fim não é incluído. NÃO modifica o original.
let meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
let primestrimestre = meses.slice(0, 3)   // índices 0, 1, 2
let segundotrimestre = meses.slice(3, 6)  // índices 3, 4, 5
console.log("Meses completos:", meses)
console.log("1º trimestre:",    primestrimestre)   // ["Jan","Fev","Mar"]
console.log("2º trimestre:",    segundotrimestre)  // ["Abr","Mai","Jun"]

// ----- 8.2: concat() — Une dois ou mais arrays -----
// Retorna um novo array. Não modifica os originais.
let grupo1 = ["Alice", "Bruno"]
let grupo2 = ["Carla", "Daniel"]
let grupo3 = ["Eva"]
let turmaCompleta = grupo1.concat(grupo2, grupo3)
console.log("\nGrupo 1:", grupo1)
console.log("Grupo 2:", grupo2)
console.log("Turma completa:", turmaCompleta)

// ----- 8.3: join() — Transforma o array em uma string -----
// Junta todos os elementos com um separador que você define.
let palavras = ["JavaScript", "é", "incrível"]
console.log("\nArray:", palavras)
console.log("join(' '):",  palavras.join(" "))    // "JavaScript é incrível"
console.log("join('-'):",  palavras.join("-"))    // "JavaScript-é-incrível"
console.log("join(', '):", palavras.join(", "))   // "JavaScript, é, incrível"

// ----- 8.4: flat() — "Achata" arrays dentro de arrays -----
// Transforma um array de arrays em um array simples.
let matrizNotas = [[8, 7, 9], [6, 10, 8], [7, 7, 8]]
console.log("\nArray de arrays:", matrizNotas)
let todasAsNotas = matrizNotas.flat()
console.log("Após flat():", todasAsNotas)   // [8, 7, 9, 6, 10, 8, 7, 7, 8]

// ----- 8.5: Spread operator (...) — Cópia e expansão -----
// Usamos ... para copiar arrays sem referenciar o original.
// Se fizermos let copia = original, ambos apontam para o mesmo lugar na memória!
let original = [1, 2, 3, 4, 5]
let copiaErrada = original          // copia o ENDEREÇO, não os valores
let copiaCorreta = [...original]    // copia os VALORES

copiaErrada[0] = 999     // modifica 'original' também!
copiaCorreta[4] = 888    // só modifica 'copiaCorreta'

console.log("\nOriginal (afetado pela cópia errada):", original)
console.log("Cópia errada:",  copiaErrada)
console.log("Cópia correta:", copiaCorreta)

// =====================================================================
// RESUMO FINAL — Métodos mais importantes
// =====================================================================
/*
  ┌─────────────────┬───────────────────────────────────────────────────┐
  │    MÉTODO       │  O QUE FAZ                                        │
  ├─────────────────┼───────────────────────────────────────────────────┤
  │ push(x)         │ Adiciona x no FINAL                               │
  │ pop()           │ Remove e retorna o último                         │
  │ unshift(x)      │ Adiciona x no INÍCIO                              │
  │ shift()         │ Remove e retorna o primeiro                       │
  │ splice(i,n)     │ Remove n elementos a partir do índice i           │
  ├─────────────────┼───────────────────────────────────────────────────┤
  │ indexOf(x)      │ Retorna o índice de x (-1 se não encontrar)       │
  │ includes(x)     │ Retorna true/false se x existe                    │
  │ find(fn)        │ Retorna o 1º elemento que passa na função         │
  │ findIndex(fn)   │ Retorna o índice do 1º elemento encontrado        │
  ├─────────────────┼───────────────────────────────────────────────────┤
  │ filter(fn)      │ Novo array com elementos que passam no teste      │
  │ map(fn)         │ Novo array com cada elemento transformado         │
  │ reduce(fn, ini) │ Reduz o array a um único valor acumulado          │
  ├─────────────────┼───────────────────────────────────────────────────┤
  │ sort(fn)        │ Ordena (usa função de comparação para números)    │
  │ reverse()       │ Inverte a ordem                                   │
  │ slice(i,f)      │ Copia do índice i até f (sem modificar original)  │
  │ concat(arr)     │ Une arrays em um novo array                       │
  │ join(sep)       │ Transforma em string com separador                │
  │ flat()          │ Achata array de arrays                            │
  │ [...arr]        │ Copia os valores (spread operator)                │
  ├─────────────────┼───────────────────────────────────────────────────┤
  │ .length         │ Propriedade: retorna o tamanho do array           │
  └─────────────────┴───────────────────────────────────────────────────┘
*/
