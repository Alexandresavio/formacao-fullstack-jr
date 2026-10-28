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