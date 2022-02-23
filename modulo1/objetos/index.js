// Exercícios de interpretação de código

// 1 - Matheus Nachtergaele 
//     Virginia Cavendish
//     "Globo", horario: "14h"


// 2 -

// a) O que vai ser impresso no console?

// const cachorro =  nome: Juca , idade: 3 , raca: SRD

// const gato = nome: Juba ,  idade: 3 , raca: SRD

// const tartaruga = nome Jubo , idade: 3 , raca: SRD


// // b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Cria a cópia de um objeto/array inteiro, permitindo acrescentar ou modificar o conteúdo.

// 3

//  a) O que vai ser impresso no console?
     //False 
     //Undefined

//   b) Não foram definidos os valores para Objeto/Propriedade.

// Exercícios de escrita de código:




// // 1

// // a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo


// const pessoa = {
//      nome: "Alfredo",
//      apelido: ["Alf"  ,  "Alfredinho"  ,  "Al"]
// }

//  function fraseFormatada(){
     
//       console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido}.`)

// }

// //fraseFormatada(pessoa)

// //b ) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const novaPessoa = {
//       ...pessoa,
//      apelido: ["Alfedro" , "Alfedrera" , "Aldrefo"]
     
//  }


// console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelido}.`)






// 2 a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// const peopleOne = {
     
//      nome: 'Bruce',
//      idade: 54,
//      profissão: 'Singer'
// }      

// const peopleTwo = {
//      ...peopleOne,
     
//      nome: 'Paul',
//      idade: 72,
//      profissão: 'Escritor'

// }

// function dados(parametro) {
// console.log(`${parametro.nome} , ${parametro.nome.length} , ${parametro.idade} , ${parametro.profissão} , ${parametro.profissão.length}`)}

// dados(peopleOne)
// dados(peopleTwo)

// 3 a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

//const carrinho = []

// //b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

// const f1 = {nome: 'Laranja' , disponibilidade: true}
// const f2 = {nome: 'Melancia' , disponibilidade: true}
// const f3 = {nome: 'Caju' , disponibilidade: true}
// const todasFrutas = [f1,f2,f3]

// //c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

// function sacolão(parametro){
//      carrinho.push(parametro)
// }
// sacolão(todasFrutas)
// console.log(carrinho)