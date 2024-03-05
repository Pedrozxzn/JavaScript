// //Laço de repetição FOR
// //escrever para o usuário 1000x "prestar mais atenção nas aulas"

// for (let i = 0; i <= 1000; i += 2) {
//   console.log(i);
// }
// console.log("============================================================");
// for (let i = 0; i < 1000; i++) {
//   console.log("Prestar mais atenção nas aulas");
// }
// console.log("============================================================");
// //escreva todos os nomeros de 1 a 20
// for (let i = 01; i <= 20; i++) {
//   console.log(i);
// }
// console.log("============================================================");
//escreva todos os numeros pares de 1 até 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
console.log("");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
console.log("============================================================");
for (let i = 0; i <= 20; i += 2) {
  if (i % 2 != 0);
  console.log(i);
}
console.log("============================================================");
//dado um vetor com números 5,6,8,14,0,9,7,2
//calcule e exiba a somatória de seus elementos
var num = 0;
var num2 = [5, 6, 8, 14, 0, 9, 7, 2];
for (let n = 0; n <= 7; n++) {
  num += num2[n];
}
console.log(`o resultado da soma total é de:`, num);
//dado um vetor comnumeros 5,6,8,14,0,9,7,2
//multiplique todos os seus elementos por 3 utilizando o loop FOR
//em seguida, mostre o novo vetor
for (let n = 0; n < num2.length; n++) {
  num2[n] = num2[n] * 3;
}
console.table(num2);
//dada a matriz 2x3, escrever para o usuario todos os seus elementos com as respectivas posições da matriz
//[8,4,1]
//[3,7,8]
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz[ ${linha},${coluna}] = ${matriz[linha][coluna]}`);
  }
}
