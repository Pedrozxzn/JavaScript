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
const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let jogadorAtual = "X";

function jogar(jogador) {
  let linha, coluna;

  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}
function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    // Verifica linhas
    if (
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2] &&
      tabuleiro[i][0] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[i][0]} ganhou!`);
      return jogadorAtual;
    }
  }

  for (let i = 0; i < 3; i++) {
    // Verifica colunas
    if (
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i] &&
      tabuleiro[0][i] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[0][i]} ganhou!`);
      return jogadorAtual;
    }
  }

  if (
    // Verifica diagonais
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro[0][0] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][0]} ganhou!`);
    return jogadorAtual;
  }

  if (
    // Verifica diagonais
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0] &&
    tabuleiro[0][2] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[0][2]} ganhou!`);
    return jogadorAtual;
  }

  if (!tabuleiro.some((linha) => linha.includes(" "))) {
    // Empate
    console.log(`O jogo empatou!`);
    return "Empate";
  }

  return "";
}

let vencedor = "";

while (!vencedor) {
  jogar(jogadorAtual); // Jogada do jogador 1
  console.table(tabuleiro); // Exibir o tabuleiro atualizado
  vencedor = verificaVencedor(); // Verificar vencedor

  if (!vencedor) {
    jogar(jogadorAtual); // Se não houver vencedor, joga o jogador 2
    console.table(tabuleiro); // Exibir o tabuleiro atualizado
    vencedor = verificaVencedor(); // Verificar vencedor após jogada do jogador 2
  }
}