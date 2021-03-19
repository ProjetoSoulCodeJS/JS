

function conversao(){
       var valores = document.getElementById('option').value
	   var valores2 = document.getElementById('option2').value
	   var input_texto = document.getElementById('valor').value

     resultado = (valores * valores2 * input_texto)
	 console.log(resultado)
	 console.log(valores)
	 console.log(input_texto)

	 document.getElementById('valorFinal').value = resultado

	}
