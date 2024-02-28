function idade(ano) {
  var tempo = new Date();
  var year = tempo.getFullYear();
  return year - ano;
}
console.log(`Sua idade é ${idade(2008)}`);
console.log("--------------------------------------------------------");
function viagem(combustivel) {
  return combustivel * 12;
}
console.log(`Você poderá andar: ${viagem(55)}km`);
console.log("--------------------------------------------------------");
function votar(idade) {
  if (idade >= 16 && idade <= 85) {
    console.log("Você pode votar");
  } else {
    console.log("Você pnão pode votar ");
  }
}
votar(27);
console.log("--------------------------------------------------------");
function votar2(idade) {
switch (true) {
    case idade < 16:
        console.log('Você não pode votar')
        break;
    case idade >=16 && idade < 18:
        console.log('Você pode votar, mas não é obrigatório')
        break;
    default:
        console.log('Você pode votar')
        break;
}}
votar2(43)
