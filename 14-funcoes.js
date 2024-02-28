function saudacao(nome) {
  console.log(`Olá ${nome}, seja bem-vindo`);
}
saudacao("Ben");
saudacao("Gwen");
saudacao("Vô Max");

//criando uma funcao de soma de dois valores retornando um resultado
function somar(valor1, valor2) {
  return valor1 + valor2;
}

console.log(`5 + 3 = ${somar(5, 3)}`);
console.log(`7 + 8 = ${somar(7, 8)}`);
console.log(`7,7 + 8,8 = ${somar(7.7, 8.8)}`);

var v1 = 9;
var v2 = 6;

console.log(`v1 + v2 = ${somar(v1, v2)}`);

//Criando uma função que caucula e retorna o desconto de uma venda
function desconto(valorVenda, desc) {
  return (valorVenda * desc) / 100;
}

var totalPedido = 300;
var totalDesconto = desconto(totalPedido, 10);

console.log(`----------------------------------------------------------`);
console.log(`total do pedido: R$ ${totalPedido}`);
console.log(`total dos descontos: R$ ${totalDesconto}`);
console.log(`valor final da venda: R$ ${totalPedido - totalDesconto}`);
console.log(`----------------------------------------------------------`);

//criando um funcao que apresenta uma pessoa
function apresentaPessoa(nome, idade, cidade) {
  console.log(`apresento a vocês: ${nome}, que tem ${idade}, e mora em ${cidade}`);
}
apresentaPessoa("Alfredo", 1000, "Rôlandia");
apresentaPessoa('Rogèrio', 76, "Ubêrlandia")
