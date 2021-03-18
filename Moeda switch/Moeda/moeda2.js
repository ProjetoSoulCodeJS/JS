		var dolarAmericano = 5.53577;
		var dolarCanadense = 4.45637;
		var euro = 6.60912;
		var libra = 7.72198;
		var pesoArgentino = 0.06065;
		function conversao(){

			
			
			switch (option){
			case 1:
			var resultado = document.getElementById(valor).innerHTML = (value/dolarAmericano)
			console.log(resultado)
			break;
			
			case 2:
			var resultado = document.getElementById(valor).innerHTML = (value/dolarCanadense)
			break;
			case 3:
			var resultado = document.getElementById(valor).innerHTML = (value/euro)
			break;
			case 4:
			var resultado = document.getElementById(valor).innerHTML = (value/libra)
			break;
			case 5:
			var resultado = document.getElementById(valor).innerHTML = (value/pesoArgentino)
			break;

			console.log(resultado)
		}

}