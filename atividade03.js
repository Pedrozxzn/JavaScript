var frutas = ["banana", "maçã", "pera", "uva", "morango"];

frutas.push("tangerina");
console.table(frutas);
console.log("");
frutas.unshift("goiaba");
console.table(frutas);
console.log("");
console.log("o elemento do indice 5 é:", frutas[5]);
console.log("");
frutas.splice(4, 1);
var proc = frutas.indexOf("uva");
console.log(frutas[proc]);
console.table(frutas);
console.log("");
frutasCopy = frutas.slice(2, 5);
console.table(frutasCopy);
console.log("-----------------------------------------------");

var numeros = ["1", "2", "3", "4", "5"];
console.table(numeros);

console.log("------------------------------------------------------");

posicao = numeros.indexOf("3");
console.log(posicao);

console.log("----------------------------------------------------------------");

numeroscopy = numeros.slice();
console.table(numeroscopy);
console.log(
  "-----------------------------------------------------------------"
);
numeroscopy = numeroscopy.map((x) => x * 2);
console.table(numeroscopy);
