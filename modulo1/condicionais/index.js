// 1 Exercícios de interpretação de código:



// 1

// a) Explique o que o código faz. Qual o teste que ele realiza? 


// Testa se o número é PAR ou ÍMPAR.


// b) Para que tipos de números ele imprime no console "Passou no teste"? 

// Números PARES

// c) Para que tipos de números a mensagem é "Não passou no teste"? 

// Números ÍMPARES

//===============================================================================

// 2

// a) Para que serve o código acima?

// Para imprimir o valor da fruta que o usuário escolher 

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

// O preço da fruta Maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

// O preço da fruta Pêra é 5.

//*https://cursos.alura.com.br/forum/topico-switch-sem-o-comando-break-34850

//===============================================================================

// 3 

// a) O que a primeira linha está fazendo?
    
// Verificando se o número colocado pelo usuário é maior que 0

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// 10  = Esse número passou no teste.
// -10 = Nada, porque o else não foi definido.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Está faltando a referencia para o else, o else necessita estar dentro do escopo, ficaria como o modelo abaixo:

//const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")}
//   else{
// 	console.log("Essa mensagem é secreta!!!")
// }

// - Exercícios de escrita de código

// 1
 
// const idade = prompt("Qual a sua idade?")
// const valorDaIdade = idade

// if (valorDaIdade >= 18) 
// {console.log("Você pode dirigir")}
// else
// {console.log("Você não pode digir")}

// 2 

// const digitePeriodo = prompt("Em qual periodo você estuda? Por gentileza: Use M, para matutino, V, para vespertino e N para noturno")
// .toUpperCase()


// if (digitePeriodo === "V"){console.log("Boa tarde!")}
// if (digitePeriodo === "N"){console.log("Boa noite!")}
// if (digitePeriodo === "M"){console.log("Bom dia!")}

// 3 

// let horarios = prompt("Em qual periodo você estuda? Por gentileza: Use M, para matutino, V, para vespertino e N para noturno")
// switch (horarios)

// {
// case 'M':
// console.log("Bom dia!")
// break

// case 'N':
// console.log("Boa noite!")
// break

// case 'V':
// console.log("Boa tarde!")
// break

// default :
// console.log ("Digite somente com M, N ou V")
// break  
// }

// 4 

// const generoFilme = confirm("O gênero é fantasia?")
// const valorIngresso = confirm("O ingresso custa R$15?")
// function vaiRolar (generoFilme , valorIngresso){
// if (generoFilme && valorIngresso)
//     {console.log("Bom filme!:)")
// }
// else{console.log("Escolha outro estilo :(")}
// }
// vaiRolar(generoFilme,valorIngresso)

//  Desafios:

// 1 

// const generoFilme = confirm("O gênero é fantasia?")
// const valorIngresso = confirm("O ingresso custa R$15?")
// const snack = prompt("Qual lanchinho vai comprar?")
// function vaiRolar (generoFilme , valorIngresso){
// if (generoFilme && valorIngresso)
//     {console.log(`Bom filme! Aproveite o seu/sua ${snack}`)
// }
// else{console.log("Escolha outro estilo :(")}
// }
// vaiRolar(generoFilme,valorIngresso)

//===============================================================================

// 2

// const nomeCompleto = prompt('Digite seu nome completo')
// const tipoDeJogo = prompt('Qual o tipo de jogo?')
// const etapa = prompt('Qual a etapa? SF, DT, FI')
// const categoria = Number.prompt("Qual catergoria? 1,2,3 ou 4")
// const igressos = Number.prompr("Quantos ingresso?")
