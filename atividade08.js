// // Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino. A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// // Requisitos:
// // A classe Aluno deve ter os seguintes atributos:
// // ra: Número de Registro do Aluno (string)
// // nome: Nome completo do aluno (string)
// // dataNascimento: Data de nascimento do aluno (data)
// // curso: Curso do aluno (string)

// // A classe Aluno deve ter os seguintes métodos:
// // calcularIdade(): Calcula e retorna a idade do aluno em anos.
// // apresentar(): Exibe as informações do aluno no formato:
// class Aluno {
//     constructor(registroDeAluno, nome, nascimento, curso){
//         this.registroDeAluno = registroDeAluno
//         this.nome = nome
//         this.nascimento = nascimento
//         this.curso = curso
// }
// caucularIdade(){
//    return 2024 - this.nascimento
// }
// apresentar(){
//     console.log(`O nome do aluno é ${this.nome}, seu Registro de Aluno é ${this.registroDeAluno}, ele nasceu em ${this.nascimento}, tem ${this.caucularIdade()} anos , e faz parte do curso ${this.curso} `)
// }
// }
// const aluno = new Aluno("9496", "Clodoaldo", 2008, "TI( Desenvolvimento de Sistemas ) no Senai de jau" )
// aluno.caucularIdade()
// aluno.apresentar()

//crie e urilize uma classe "sorvete" contendo as propriedades: sabor, preço, e tamanho ( pequeno | médio | grande )
class Sorvete {
  constructor(sabor, tamanho, preco) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  saborSorvete() {
    console.log(
      `Olá meu nome é Alberto e eu irei pegar um sorvete de sabor ${this.sabor}, de tamanho ${this.tamanho} que custa ${this.preco}`
    );
  }
  alterarPreco(precoNovo) {
    this.preco = precoNovo;
  }
}
var preco1 = new Sorvete("Morango", "G", "R$ 10,00");
preco1.saborSorvete();
var preco2 = new Sorvete("Chocolate", "P", "R$ 11,35");
preco2.saborSorvete();
var preco3 = new Sorvete("Melancia", "M", "R$ 9,90");
preco3.saborSorvete();
preco1.alterarPreco(`R$ 10,51`);
preco1.saborSorvete();

console.log(
  "=========================================================================="
);
console.log(
  "                               Strings                                    "
);
console.log(
  "=========================================================================="
);
function comp(texto1, texto2) {
  if (texto1.toUpperCase() == texto2.toUpperCase()) {
    console.log("As duas strings são iguais");
  } else {
    console.log("As duas strings são diferentes");
  }
}
comp("Alfredo", "alfredo");
console.log(
  "========================================================================"
);
function extrairNumeros(str) {
  const regex = /\d+/g;
  return str.match(regex);
}

const string = "O preço do produt é R$ 50,99";
const numeros = extrairNumeros(string);
console.log(numeros);
console.log(
  "========================================================================"
);

function inverterPalavras(frase) {
  const palavras = frase.split(" ");

  const palavrasInvertidas = [];

  for (let i = palavras.length - 1; i >= 0; i--) {
    palavrasInvertidas.push(palavras[i]);
  }

  return palavrasInvertidas.join(" ");
}

const fraseOriginal = "Olá, mundo!";
const fraseInvertida = inverterPalavras(fraseOriginal);
console.log(fraseInvertida);
