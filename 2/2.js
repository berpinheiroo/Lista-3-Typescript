var palavra = prompt("Digite uma palavra");
CaracterCentral(palavra);
function CaracterCentral(palavraSup) {
    var tamanho = palavraSup.length;
    console.log(tamanho);
    if (tamanho % 2 == 0) {
        console.log(palavraSup[(tamanho / 2) - 1], palavraSup[(tamanho / 2)]);
    }
    else {
        console.log(palavraSup[Math.floor(tamanho / 2)]);
    }
}
