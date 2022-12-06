var palavra = "batata";
function contarVogais(palavra) {
    var vogais = ["a", "e", "i", "o", "u"];
    var contagemVogais = 0;
    for (var i = 0; i < palavra.length; i++) {
        for (var x = 0; x < vogais.length; x++) {
            if (palavra[i] === vogais[x]) {
                contagemVogais++;
            }
        }
    }
    return contagemVogais;
}
console.log(contarVogais(palavra));
