/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const inicioRodada = confirm('Bem Vindos ao jogo de Blackjack! \nQuer iniciar uma nova rodada?')


let cartaUsuário1 = comprarCarta()
let cartaUsuário2 = comprarCarta()
let cartaComputador1 = comprarCarta()
let cartaComputador2 = comprarCarta()

let cartasUsuário = [cartaUsuário1, cartaUsuário2]
let cartasComputador = [cartaComputador1, cartaComputador2]

function mostrarResultado(carta1, carta2) {

   console.log('Usuário - cartas:', carta1[0].texto, carta1[1].texto, carta1[0].valor + carta1[1].valor)

   console.log('Computador - cartas:', carta2[0].texto, carta2[1].texto, carta2[0].valor + carta2[1].valor)

   //8 - Se as duas cartas iniciais do usuário ou do computador forem dois ases (A), as cartas devem ser sorteadas novamente

   if (cartasUsuário, cartasComputador === ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q"]) {
      inicioRodada
   }

   else if (carta1[0].valor + carta1[1].valor > carta2[0].valor + carta2[1].valor) {
      console.log('Usuário ganhou!')
   }


   else if (carta1[0].valor + carta1[1].valor < carta2[0].valor + carta2[1].valor) {
      console.log('Computador ganhou!')

   }

   else { console.log('Empate') }


}

if (inicioRodada) {

   mostrarResultado(cartasUsuário, cartasComputador)
}

else { console.log('O jogo acabou!') }



