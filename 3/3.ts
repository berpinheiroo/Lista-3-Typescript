var numero = prompt("Escolha um numero")

function ordemDecrescente(numero){
    return parseInt(numero.toString().split('').sort(function(a, b){return b-a}).join(''));
  }
  
  console.log(ordemDecrescente(numero))