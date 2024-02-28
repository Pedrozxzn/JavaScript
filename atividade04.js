var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);
console.log("Diagonal 1 é: ", matriz[0][0], matriz[1][1], matriz[2][2]);
console.log("Diagonal 2 é: ", matriz[2][0], matriz[1][1], matriz[0][2]);
console.log("Diagonal 3 é: ", matriz[0][2], matriz[1][1], matriz[2][0]);
console.log("Diagonal 4 é: ", matriz[2][2], matriz[1][1], matriz[0][1]);

console.log("-----------------------Atividade05----------------------------");

var usuario = [
  "Benjamin",
  15,
  " Azul",
  "Melancia",
  "Jardim Olipía 240",
  "Alfredo",
];
console.table(usuario);

console.log(
  "Olá",
  usuario[0],
  "! Seja bem-vindo ao nosso sistema,",
  "Você mora no endereço,",
  usuario[4],
  "E tem um pet chamado,",
  usuario[5],
  "Sua idade é,",
  usuario[1],
  "E gosta muito da fruta,",
  usuario[3],
  "Sua cor favorita é,",
  usuario[2]
);