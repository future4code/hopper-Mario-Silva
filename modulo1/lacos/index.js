// Exercícios de interpretação de código

/* 1 - Vai percorrer todos os valores enquanto forem menores que 5, mas como o valor tem o '+', o resultado vai somando
mais um a cada 'volta'. O valor de 'valor' será 10 */

// 2 - a) Serão impressos todos os números maiores que 18.

//     b) Para acessar o índice dos elementos é necessário utilizar o 'FOR'

// 3 - 4 linhas com *, sendo que a primeira vai receber * : a segunda ** ... a quarta ****


//Exercícios de Código

//1) 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
    
    // let bichos = Number(prompt('Quantos bichinhos de estimação você tem?'));
    // //a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    // const nomeDosBichos = []
    // if (bichos === 0){
    //     console.log('Que pena! Você pode adotar um pet!')
    // } else if (bichos > 0) {
    //     for (let i = 0; i < bichos; i++) {
    //       let nomesPet = prompt("Qual nome deles?");
    //       nomeDosBichos.push(nomesPet);
    //     }
    // }
    //  console.log(nomeDosBichos)


    //2 Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
// let arrayOriginal = [1, 2, 3, 4]
//a) Escreva um programa que imprime cada um dos valores do array original.
// function impressao(array){
// for (let num of array) {
//     console.log(num)
// }
// return array
// }
// impressao(arrayOriginal)

//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
// function divisao10(array){
//     for (let num of array) {
//         console.log(num/10)
//     }
//     return array
// }
// divisao10(arrayOriginal)

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
    // function pares(array){
    //     for (let num of array){
    //      if(num % 2 === 0){
    //         console.log(num)
    //     }
    //     }
    //     return array
    // }
    //     pares(arrayOriginal)

    //d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.
// function novoArray(array){ // Função para criar um novo array, a partir do array original.
//     let newArray = [] // variável com um array vazio.
//     for (let i = 0; i < array.length; i++){ // enquanto o indice inicial for menor que o tamanho da array
//                                             // encrementar +1 no indice.
//         const valor = array[i] // variavel valor que recebe o array do indice.
//         newArray.push(`O elemento do index ${i} é ${valor}`)// implementa o indice mais o valor, com uma frase dentro da nova array.
//     } console.log(newArray) // Mostrar no console o novo array
// }
// novoArray(arrayOriginal)

   //e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
// let maiorNum = 0;
// let menorNum = 0;
// function mostrarMaiorMenor(array) {
//   for (let num = 0; num < array.length; num++) {
//     if (array[num] > maiorNum) {
//       maiorNum = array[num];
//     } else {
//       menorNum = array[num];
//     }
//   }
//   console.log(maiorNum, menorNum);
// }
// const resultado = mostrarMaiorMenor(arrayOriginal);
// console.log(resultado);