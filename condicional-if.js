// //condição simples única
// var anoNascimento = 2008;

// if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003!`);

// if (anoNascimento < 2003) console.log(`A pessoa nasceu antes de 2003!`);

// if (anoNascimento == 2003) console.log(`A pessoa nasceu em 2003!`);

// condicional simples if-else
var anoNascimento = 2000;
if (anoNascimento > 2000) console.log(`A pessoa nasceu depois de 2000!`);
else console.log(`A pessoa nasceu antes de 2000!`);

//condicional composto com if
const login = "admin";
var senha = "123456";

//banco de dados
const loginUser = "admin";
const senhaUser = "admin";

if (login == loginUser || senha == senhaUser) console.log(`Acesso permitido"`);
else console.log(`Acesso negado!`);

//função semaforo
function semaforo(cor) {
  if (cor == "vermelho") console.log(`Pare`);
  else if (cor == "amarelo") console.log(`Preste atenção`);
  else if (cor == "verde") console.log(`Siga`);
  else
    console.log(`Você informou cores diferentes de verde, amarelo ou vermelho`);
}
semaforo("verde");

//desvio condicional if com bloco de comandos
console.log("-------------------------------------------------------------");
var idade = 18;

if (idade <= 18) {
  console.log("entrou no if...");
  idade++, console.log("Incrementei a idade...");
  console.log(`A nova idade é ${idade}`);
  console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`Terminei`);

//desvio condicional if inline (ternario)
    //validação (algo == algo) ou (algo > alguma coisa)
    //?(IF)
    //Termos de aceite do IF (se for verdadeiro)
    //: (ELSE) 
    //Se for falso
    //testeDe Validação == teste ? "Bla Bla" : ("Ble Ble")
var preco = 500

var resultado