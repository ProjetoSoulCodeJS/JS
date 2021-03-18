var valor;
var resultado;
var element;
var element2;
function botao(num){
if (num == 'π'){
valor = document.calc.visor.value += 3.14159;
}

else if(num == 'sin'){
valor = document.calc.visor.value = Math.sin(valor|resultado|0)
}

else if(num == 'cos'){
    valor = document.calc.visor.value = Math.cos(valor|resultado|0)
}

else if(num == 'tan'){
    valor = document.calc.visor.value = Math.tan(valor|resultado|0) 
}

else if(num == 'log2'){
    valor = document.calc.visor.value = Math.log2(valor|resultado|1) 
}

else if(num == 'log10'){
    valor = document.calc.visor.value = Math.log10(valor|resultado|1) 
}

else if(num == '^2'){
    valor = document.calc.visor.value = Math.pow(valor|resultado, 2) 
}

else if(num == '^3'){
    valor = document.calc.visor.value = Math.pow(valor|resultado, 3) 
}

else if(num == '√'){
    valor = document.calc.visor.value = Math.sqrt(valor|resultado|0) 
}

else{
valor = document.calc.visor.value += num;
}
}

function reseta(num){
resultado = 0;
valor = 0;
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
resultado = 0;
valor = 0;
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








