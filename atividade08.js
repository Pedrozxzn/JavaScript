// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino. A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.


// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)


// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:
class Aluno {
    constructor(registroDeAluno, nome, nascimento, curso){
        this.registroDeAluno = registroDeAluno
        this.nome = nome
        this.nascimento = nascimento
        this.curso = curso
}
caucularIdade(){
   return 2024 - this.nascimento
}
apresentar(){
    console.log(`O nome do aluno é ${this.nome}, seu Registro de Aluno é ${this.registroDeAluno}, ele nasceu em ${this.nascimento}, tem ${this.caucularIdade()} anos , e faz parte do curso ${this.curso} `)
}
}
const aluno = new Aluno("9496", "Clodoaldo", 2008, "TI( Desenvolvimento de Sistemas ) no Senai de jau" )
aluno.caucularIdade()
aluno.apresentar()