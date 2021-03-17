var valor;
var resultado;
var element;
var element2;
function botao(num){
if (num == 'π'){
valor = document.calc.visor.value += 3.14;
}

else if(num == 'sin'){
valor = document.calc.visor.value = Math.sin(valor)
}

else if(num == 'cos'){
    valor = document.calc.visor.value = Math.cos(valor)
}

else if(num == 'tan'){
    valor = document.calc.visor.value = Math.tan(valor) 
}

else if(num == 'log2'){
    valor = document.calc.visor.value = Math.log2(valor) 
}

else if(num == 'log10'){
    valor = document.calc.visor.value = Math.log10(valor) 
}

else if(num == '^2'){
    valor = document.calc.visor.value = Math.pow(valor, 2) 
}

else if(num == '^3'){
    valor = document.calc.visor.value = Math.pow(valor, 3) 
}

else if(num == '√'){
    valor = document.calc.visor.value = Math.sqrt(valor) 
}

else{
valor = document.calc.visor.value += num;
}
}

function reseta(num){
document.calc.visor.value = ''
}

function calcula (num){
resultado = eval(valor);
document.calc.visor.value = resultado
}

//Segunda Calculadora

function botao2(num){
valor = document.calc2.visor.value += num;
}
    
function reseta2(num){
document.calc2.visor.value = ''
}
    
function calcula2 (num){
resultado = eval(valor);
document.calc2.visor.value = resultado
}

function ligar(n){
if(n == 0){
elemento = document.getElementById("disable_bt");
elemento.classList.toggle("disable_change");
elemento = document.getElementById("visor");
elemento.classList.toggle("visor_cient2").
elemento = document.getElementById("enable1").disabled ^= true
}

else if (n == 1){
elemento = document.getElementById("disable1_bt");
elemento.classList.toggle("disable1_change");
elemento = document.getElementById("visor_cient");
elemento.classList.toggle("visor_cient2");
elemento = document.getElementById("enable").disabled ^= true
}
}








