// //craindo um "objeot" do tipo data
// var data1 = new Date();
// console.log(data1);

// //criando um objeto do tipo data com data expecifica
// var data2 = new Date("2005=05-12");
// console.log(data2);

// //extraindo partes de uma dat
// var data3 = new Date("2008=03-17");
// console.log(`Data: ${data3}`);
// console.log(`Ano: ${data3.getFullYear()}`);
// console.log(`Mês: ${data3.getMonth() + 1}`);
// console.log(`Dia: ${data3.getDate()}`);

// const mes = [
//   "Janeiro",
//   "Fevereiro",
//   "Março",
//   "Abril",
//   "Maio",
//   "Junho",
//   "Julho",
//   "Agosto",
//   "Setembro",
//   "Outubro",
//   "Novembro",
//   "Dezembro",
// ];
// console.log(`Retornando o mês por escrito`);
// console.log(`Mês: ${mes[data3.getMonth()]}`);

// const diDaSemana = [
//   "Domingo",
//   "Segunda",
//   "Terça",
//   "Quarta",
//   "Quinta",
//   "Sexta",
//   "Sabado",
// ];
// console.log("Retornando o dia da semana por escrito");
// console.log(`Dia da semana: ${diDaSemana[data3.getDay()]}`);
console.log(
  "================================================================="
);

const dataNasc = new Date("2008=03-17");
const dataAtual = new Date();

const diferenca = dataAtual.getTime() - dataNasc.getTime();
//console.log(`Diferença = diferenca / 1000`)

const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`Sua idade é: ${idade} anos`);
console.log(
  "================================================================="
);

const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
console.log(`Diferença em anos é: ${diferencaAnos} anos`);
if (
  dataAtual.getMonth() < dataNasc.getMonth() ||
  (dataAtual.getMonth() === dataNasc.getMonth() &&
    dataAtual.getDate() < dataNasc.getDate())
) {
  console.log(`Ainda não fez Aniversário`);
  console.log(`Sua idade é: ${diferencaAnos - 1} anos`);
}