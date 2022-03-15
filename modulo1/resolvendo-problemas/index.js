//*    1 -  Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
//*    Exemplo [3, 2, 1, 4, 7]` retorna `5`



//*    2 - Escreva uma função que recebe um array como parâmetro e retorne este array invertido.  
//* Desafio (OPCIONAL) - Faça sem utilizar a função reverse().


//*    3 - Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente. 
//* Faça sem utilizar a função sort()


//*    4 - Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
//* ex: [1, 2, 3, 4, 5, 6] deve retornar [2, 4, 6]
//* desafio Faça sem utilizar o método filter()

//*    5 - Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
//* ex `[1, 2, 3, 4, 5, 6]` deve retornar `[4, 16, 36]`


//*    6 - Escreva uma função que receba um array de números e retorne o maior número dele.
//* ex [1, 5, 3, 7, 5, 2] deve retornar 7


//*    7 - Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:

//* maiorNumero → contém o maior número

//* maiorDivisivelPorMenor → booleano indicando se o maior é divisível pelo menor 

//* diferenca → contém a diferença entre eles (deve ser um número positivo sempre)

//* obs: para os testes funcionarem, as propriedades do objeto devem possuir os exatos nomes acima



//*    8 - Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares 
//* ex 3 retorna [0, 2, 4]  // 5 retorna [0, 2, 4, 6, 8]


//*    9 - Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorne se ele é equilátero, isósceles ou escaleno (não é necessário validar se os lados fecham um triângulo). O que define os tipos de triângulo?

//* Se um triângulo possuir os três lados iguais, ele é chamado de "Equilátero".

//* Se possuir apenas **dois lados iguais**, diz-se que ele é "Isósceles".

//* Se os três lados tiverem medidas diferentes, ele é "Escaleno". 


//*    10 - Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM): o segundo maior e o segundo menor número do array original. 
//* ex [3, 2, 1, 4, 7, 6, 5] retorna [6, 2]


//*    11 - Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco. Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:

//* ex
// // entrada
// {
//     nome: 'O Diabo Veste Prada',
//     ano: 2006,
//     diretor: 'David Frankel',
//     atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
//  }
 
//  // saída
//  "Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci."

//*    12 - Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e email  e retorne um novo objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome. 

//* Dica Use o operador spread 

//* ex
// //entrada
// {
// 	nome: "Astrodev",
// 	idade: 25,
// 	email: "astrodev@labenu.com.br",
// 	endereco: "Rua do Futuro, 4"
// }

// // saída
// {
// 	nome: "ANÔNIMO",
// 	idade: 25,
// 	email: "astrodev@labenu.com.br",
// 	endereco: "Rua do Futuro, 4"
// }

//*    13 - Imagine que você trabalhe num parque de diversões, como pessoa desenvolvedora. As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. As regras para entrar na montanha russa do terror são: 

//* Ter, no mínimo, 1.5m de altura; Ser mais velho do que 14 anos e Ser mais novo do que 60 anos.

//* Dados esses requisitos, escreva:

//* A uma função que receba um array e devolva outro contendo as pessoas que tem permissão para entrar no brinquedo

//* B  uma função que receba um array e devolva outro contendo as pessoas que não tem permissão para entrar no brinquedo

// ex
// // entrada
// [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// // saída - Item A
// [
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// ],

// // saída - Item B
// [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]



//*    14 - Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Exemplo:

// ex
// // entrada
// [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]
//* A sua tarefa é: faça uma função que receba um **array** com os objetos do tipo acima como parâmetro e atualize o **saldo total** individual de cada um, **sem criar um novo** array. Retorne o array original. O array do exemplo acima deve ficar assim:

// ex

// // saída
// [ 
//     { cliente: 'João', saldoTotal: 400, compras: [] },
//     { cliente: 'Paula', saldoTotal: 6260, compras: [] },
//     { cliente: 'Pedro', saldoTotal: -3340, compras: [] },
//     { cliente: 'Luciano', saldoTotal: -1900, compras: [] },
//     { cliente: 'Artur', saldoTotal: 1300, compras: [] },
//     { cliente: 'Soter', saldoTotal: 1200, compras: [] } 
//   ]

//*    15 - Você foi contratado por um escritório médico para organizar a agenda de consultas

// [
//     { nome: "João", dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia", dataDaConsulta: "04/05/2021" }
//   ]
  
//* A sua tarefa é criar uma função que receba o array acima como parâmetro e retorne um array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética)

// [
//     { nome: "João", dataDaConsulta: "01/10/2021" },
//     { nome: "Márcia", dataDaConsulta: "04/05/2021" },
//     { nome: "Paula", dataDaConsulta: "03/11/2021" },
//     { nome: "Pedro", dataDaConsulta: "02/07/2021" }
//   ]

//* DESAFIO

//* A sua segunda tarefa é criar uma função que receba o **array** acima como parâmetro e retorne um **array de consultas ordenado pelas datas das consultas(da menor para a maior)**

//* Exemplo de saída:

// [ 
//     { nome: "Márcia", dataDaConsulta: "04/05/2021" },
//     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
//     { nome: "João",  dataDaConsulta: "01/10/2021" },
//     { nome: "Paula", dataDaConsulta: "03/11/2021" } 
//    ];