const palavra = "batata"

function contarVogais(palavra) {

  const vogais = ["a", "e", "i", "o", "u"]
  let contagemVogais = 0
  
  for (var i = 0; i < palavra.length; i++) {
    for (var x = 0; x < vogais.length; x++) {
      if (palavra[i] === vogais[x]) {
        contagemVogais++
      }
    }
  }
  
  return contagemVogais
}
console.log(contarVogais(palavra))