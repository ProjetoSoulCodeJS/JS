var resultadoTotala = 5
var resultado = 9
var opcao;

function conversao(){
var opcao = parseInt(document.getElementById('option').value)
console.log(opcao)
return resultado + resultadoTotala + opcao
}

function seila2(){
console.log(conversao())
}