// // //definindo uma classe pessoa
// // class Pessoa {
// //   constructor(pNome, pIdade) {
// //     this.nome = pNome;
// //     this.idade = pIdade;
// //   }
// //   apresentaSe() {
// //     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
// //   }
// //   envelhecer() {
// //     this.idade++;
// //   }
// // }

// // //criando onjetos do 'tipo' pessoa
// // var p1 = new Pessoa("Dienifer", 52);
// // var p2 = new Pessoa("Taldo Roberto", 18);

// // p1.apresentaSe();
// // p2.apresentaSe();

// // p1.envelhecer();
// // p1.apresentaSe();

// // p2.envelhecer();
// // p2.apresentaSe();
// // console.log(
// //   "============================Abstração============================"
// // );
// // class Pet {
// //   constructor(nome, idade, tipo) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipo = tipo;
// //   }
// //   alimentar() {
// //     console.log(`${this.nome} foi alimentado!`);
// //   }
// // }
// // const meuPet = new Pet("ben", 2, "Cachorro");
// // console.log(
// //   `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos`
// // );

// // meuPet.alimentar();
// // console.log("============================Herança=============================");
// // class Animal {
// //   constructor(nome, idade, tipoAlimentacao) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipoAlimento = tipoAlimentacao;
// //   }
// //   alimentar() {
// //     console.log(`O animal ${this.nome} foi alimentado`);
// //   }
// //   emitirSom() {
// //     console.log(`Barulho padrão de animal`);
// //   }
// // }
// // class Catiolo extends Animal {
// //   alimentar() {
// //     console.log(`O catiolo ${this.nome} foi alimentado`);
// //   }
// //   emitirSom() {
// //     console.log(`AU AU`);
// //   }
// // }
// // const pet = new Animal("Adalberto", 10, "Comida especial");
// // const meuCachorro = new Catiolo("ben", 3, "Ração");

// // pet.alimentar();
// // pet.emitirSom();

// // console.log(" ");

// // meuCachorro.alimentar();
// // meuCachorro.emitirSom();
// // console.log("========================Encapsulamento==========================");
// // class Petzinho {
// //   constructor(nome, idade, tipo) {
// //     this.nome = nome;
// //     this.idade = idade;
// //     this.tipo = tipo;
// //   }
// //   getNome() {
// //     return this.nome;
// //   }
// //   setNome(novoNome) {
// //     this.nome = novoNome;
// //   }
// // }
// // const novoPetzinho = new Petzinho("Bob", 3, "Cachorro");

// // console.log(novoPetzinho.getNome());
// // novoPetzinho.setNome("Alfredo");
// // console.log(novoPetzinho.getNome());
// console.log("=======================Polimorfismo====================");
// class Animal {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   fazerBarulho() {
//     console.log("O animal faz um barulho genérico.");
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O cachorro late!");
//   }
// }

// class Gato extends Animal {
//   constructor(nome) {
//     super(nome);
//   }

//   fazerBarulho() {
//     console.log("O gato mia!");
//   }
// }

// // Exemplo de uso
// const animais = [
//   new Cachorro("Rex"),
//   new Gato("Mia"),
//   new Animal("Bob"), // Animal genérico
// ];

// for (const animal of animais) {
//   animal.fazerBarulho();
// }
console.log(
  "================================Exemplos==================================="
);
//criando uma classe retangulo
class Retangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }
  obterArea() {
    return this.comprimento * this.largura;
  }
  obterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  setComprimento(novoComprimento) {
    this.comprimento = novoComprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}
//criando um objeto do "tipo" retangulo
const ret1 = new Retangulo(10, 15);

function displayRet(retangulo) {
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`);
  console.log(`largura = ${retangulo.largura}`);
  console.log(`área = ${retangulo.obterArea()}`);
  console.log(`perimetro = ${retangulo.obterPerimetro()}`);
}
displayRet(ret1);
ret1.setComprimento(20);
displayRet(ret1);
ret1.setLargura(50);
displayRet(ret1);
