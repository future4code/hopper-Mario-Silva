``` JS
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    
    let newArray = []
    for(let i = 0; i < animais.length; i++){
      let name = animais[i].nome
      newArray.push(name)
    }
    return newArray
    
 // Escreva seu código aqui

}
```