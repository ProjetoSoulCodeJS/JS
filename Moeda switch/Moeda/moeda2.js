var resultadoTotal;
function conversao(){
	    var valores = document.getElementById('valor').value;
		var conversaoM = document.getElementById('option').value;
		var resultadoConversao = document.getElementById('option2').value;


		if (conversaoM == 2){
		var moeda = valores / 5.53577
		}

		else if (conversaoM == 3){
		var moeda = valores / 4.45637
		}

		else if (conversaoM == 4){
		var moeda = valores / 6.60912
		}

		else if (conversaoM == 5){
		var moeda = valores / 7.72198
		}

		else{
		var moeda = valores / 0.06065
		}

		console.log(moeda)

		if (resultadoConversao == 2){
		var resultadoTotal = moeda / 5.53577
		}

		else if (resultadoConversao == 3){
		var resultadoTotal = moeda / 4.45637
		}

		else if (resultadoConversao == 4){
		var resultadoTotal = moeda / 6.63
		}

		else if (resultadoConversao == 5){
		var resultadoTotal = moeda / 7.72198
		}
		console.log(moeda)
		console.log(resultadoTotal)
	}
