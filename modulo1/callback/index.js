//Exercícios de interpretação de código 

// 1 - Será impresso: Nome, apelido e a posição de cada elemento.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// 2 - Retorna apenas os nomes. 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ];

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome;
//   })

//   console.log(novoArrayB);


// 3 - Vai retornar item, index, array dos elementos, menos os que conterem "Chijo".

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//     return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

//                 ================================ Exercícios de escrita de código ===========================================


// Exercicio 1.

// a) Crie um novo array que contenha apenas o nome dos doguinhos


// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// const nome = pets.map((item) => {
//     return item.nome;
// })

// console.log(nome);


//b) Crie um novo array apenas com os cachorros salsicha

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// const racaSalsicha = (index) => {
//     return  index.raca ===  "Salsicha"
// }
// const salsicha = pets.filter(racaSalsicha);
// console.log(salsicha);

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const pets = [
//    { nome: "Lupin", raca: "Salsicha" },
//    { nome: "Polly", raca: "Lhasa Apso" },
//    { nome: "Madame", raca: "Poodle" },
//    { nome: "Quentinho", raca: "Salsicha" },
//    { nome: "Fluffy", raca: "Poodle" },
//    { nome: "Caramelo", raca: "Vira-lata" },
// ]

// const racaPoodles = (index) => {
//    return index.raca === "Poodle"
// }
// const poodle = pets.filter(racaPoodles)


// const pegarNome = (index) => {
//    return index.nome

// }

// const nomePoodle = poodle.map(pegarNome)

// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle[0]}!`)
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle[1]}!`)

// 2 - Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//]

// a) Crie um novo array que contenha apenas o nome de cada item.

// const nomes = produtos.map((item) =>{
//    return item.nome

//})

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles.

// const nomes = produtos.map((item) =>{
//    const nomePreco =  [item.nome , (item.preco * 0.95).toFixed(2) ]
//    return nomePreco

// })
// console.log(nomes)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

//const soBebidas = produtos.filter((item) => {
//return item.categoria === "Bebidas"

//})
//console.log(soBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const onlyYpe = produtos.filter((item) => {
//    return item.nome.includes('Ypê'); 


// })
// console.log(onlyYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]


// const onlyYpe = produtos.filter((item) => {
//    return item.nome.includes('Ypê')
// })

// const inicio = (produto) =>{
//    console.log(`Compre ${produto.nome} por ${produto.preco}`)
// }

// const outroGato = onlyYpe.map(inicio)
// inicio(onlyYpe)