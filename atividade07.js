//primeiro criar constantes para oas duas porcentagens de crescimento das duas populações
//depois multiplicar a população com a taxa de crescimento para descobrir quanto as populações  crescem ao ano
var populacaoA = 100003; //variavel do valor da população do País A
var populacaoB = 300004; //variavel do valor da população do País B
var anos = 0;
while (populacaoA < populacaoB) {
  var paisA = 0.03 * populacaoA;
  var paisB = 0.015 * populacaoB;
  populacaoA += paisA;
  populacaoB += paisB;
  anos++;
} // ciclo de repetção que só vai parar quando o País A ultrapasse ou iguale a população do País B
console.log(`Concluimos nossa meta de alcançar o PaísB em: ${anos} anos`);
console.log(
  "=================================================================================="
);
//'bolinha' = O X
// var matriz = [
//     ['','',''],
//     ['','',''],
//     ['','',''],
// ]
// var jogador1 = "X"
// var jogador2 = 'O'
// function velha(){
//     for (var l = 0; l < mstriz.length; l++) {
//         for (var c = 0; c < matriz.length; c++) {

//         }
//     }
// }
var tabuleiro = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let jogadorX = "X";
let jogadorO = "O";
function jogar(jogador) {
        let linha, coluna;
        do {
          linha = Math.floor(Math.random() * 3);
          coluna = Math.floor(Math.random() * 3);
        } while (tabuleiro[linha][coluna] !== " ");

        tabuleiro[linha][coluna] = jogador;
        for (let j = 0; j < 9; j++) {
           jogar(jogadorX)
           jogar(jogadorO)
        }
      }
jogar(jogadorX);
jogar(jogadorO);

console.table(tabuleiro);

