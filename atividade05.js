function idade(ano) {
  var tempo = new Date();
  var year = tempo.getFullYear();
  return year - ano;
}
console.log(`Sua idade é ${idade(2008)}`);
console.log("");
console.log("--------------------------------------------------------");
console.log("");
function viagem(combustivel) {
  return combustivel * 12;
}
console.log(`Você poderá andar: ${viagem(55)}`);
