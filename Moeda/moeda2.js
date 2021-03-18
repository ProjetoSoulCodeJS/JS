
		var valor;
        var valor2;
        var valor3 = valor * valor2


	
		function conversao(){
			var dolarAmericano = 5.53;
			var dolarCanadense = 0.80;
            var realBrasileiro = 2.35;
			var euro = 1.19;
			var libra = 4.27;
			var pesoArgentino = 0.22;
			
			valor = parseFloat(document.getElementById("valor").value);
			var opcao = document.getElementById("option").value;
			var opcao2 = document.getElementById("option02").value;
			console.log (opcao2)
			


				
			
			if(isNaN(valor)){
				alert("Apenas numeros devem ser informados");				
			}	
			
			if(opcao==1){
			  resultado = document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano * realBrasileiro).toFixed(2);			
				
			}
			
			switch (opcao, opcao2){
			case 1:
			resultado = document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano * realBrasileiro).toFixed(2);
			break;	
			case 2:
			resultado = document.getElementById("valorFinal").innerHTML = (valor/dolarCanadense * realBrasileiro).toFixed(2);
			break;	
			case 3:
			resultado = document.getElementById("valorFinal").innerHTML = (valor/euro * realBrasileiro).toFixed(2);
			break;	
			case 4:
			resultado = document.getElementById("valorFinal").innerHTML = (valor/libra * realBrasileiro).toFixed(2);
			break;	
			case 5:
			resultado = document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano * realBrasileiro).toFixed(2);
			break;	
			case 6:
			resultado = document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano * realBrasileiro).toFixed(2);
			break;	
			case 7:
			resultado = document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano * realBrasileiro).toFixed(2);
			break;	
			}
		}
		