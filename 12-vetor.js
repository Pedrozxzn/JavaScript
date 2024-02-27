// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros);
// console.log(numeros[2]);

// numeros[2] = 6;
// console.log(numeros);
// console.log(numeros[2]);

var dinos = ["titanossauro rex", "estercossauro", "aquilossauro"];
console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); //retorna o primeiro indice do array
console.log("");
console.table(dinos); //cria tabela com os itens do array
console.log("O vetor tem ", dinos.length, "elementos!"); //quantidade de itens do array

//adicinando elemntos ao vetor existente
dinos.push("brontossauro", "velocirapido");
console.table(dinos);

dinos.unshift("Triceratopos");
console.table(dinos);

//Alterando elementos com base no indice(posição)
dinos[3] = "titanossauros";
console.table(dinos);

//Obtendo um elemento com base em seu indice
console.log("primeira posição:", dinos[0]);
console.log("segunda posição", dinos[1]);
console.log("item da posição 20:", dinos[20]);

//Removendo elementos do vetor
dinos.pop(); //remove o ultimo elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do indice 1, contando 1.
console.table(dinos);

console.log("");
console.log("--------------Continuação Aula---------------");
var aliens = [
  "enormossauro",
  "arraia-a-jato",
  "cromatico",
  "artropode",
  "fogo fatuo",
  "macaco-aranha",
  "friagem",
  "armato",
];
console.table(aliens);

var elementoProcurado = "enormossauro";
var posicao = aliens.indexOf(elementoProcurado);
console.log("O", elementoProcurado, "esta no indice", posicao);
//criando copia de array (vetor)
var copia1 = aliens.slice();
console.log("vetor cópia 1");
console.table(copia1);
var copia2 = aliens.slice(1,3)
console.log('Vetor copia 2')
console.table(copia2);
