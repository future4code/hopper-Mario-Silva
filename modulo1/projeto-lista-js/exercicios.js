// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 const altura = Number(prompt("Digite a altura"))
 const largura = Number(prompt("Digite a largura"))
 const calculaAreaRetangulo = altura*largura
 console.log(calculaAreaRetangulo) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

const anoAtual = Number(prompt("Digite o ano atual"))
const anoNascimento = Number(prompt("Digite o ano de nascimento"))
const imprimeIdade = anoAtual - anoNascimento
console.log (imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return calculaIMC = peso / (altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  
  const NOME = prompt("Digite seu nome")
  const IDADE = prompt("Digite sua idade")
  const EMAIL = prompt("Digite seu e-mail")
  const imprimeInformacoesUsuario = (`Meu nome é ${NOME}, tenho ${IDADE} anos, e o meu email é ${EMAIL}.`)
  console.log(imprimeInformacoesUsuario)
 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite a primeira cor")
  const cor2 = prompt("Digite a segunda cor")
  const cor3 = prompt("Digite a terceira cor")
  const imprimeTresCoresFavoritas = [cor1, cor2, cor3]
  console.log(imprimeTresCoresFavoritas)
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return calculaIngressosEspetaculo = custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length -1]
}

// EXERCÍCIO 11

//Escreva uma função que recebe um array e retorna um array com o primeiro e o último elemento trocados.
function trocaPrimeiroEUltimo(array) {
  let posInic = array[0]// 1
  let posFinal = array[array.length -1] // 5
  array[0] = array[array.length-1] // 5
  array[array.length-1] = posInic // 1

  return array
  
  
}

// EXERCÍCIO 12
// Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se
// elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  

 
  const m = string1.toUpperCase()
  const m2 = string2.toUpperCase()
  const comp = m === m2
  return comp


  // implemente sua lógica aqui

}
console.log(checaIgualdadeDesconsiderandoCase)

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}