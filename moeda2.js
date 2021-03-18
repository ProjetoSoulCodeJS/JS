
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

				
			
			if(isNaN(valor)){
				alert("Apenas numeros devem ser informados");				
			}	
			
			if(opcao==1){
				document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano * realBrasileiro).toFixed(2);			
				
			}
			
			if(opcao==2){
				document.getElementById("valorFinal").innerHTML = (valor/dolarCanadense * dolarAmericano).toFixed(2);			
				
			}
			
			if(opcao==3){
				document.getElementById("valorFinal").innerHTML = (valor/realBrasileiro).toFixed(2);			
				
			}
			
			if(opcao==4){
				document.getElementById("valorFinal").innerHTML = (valor/euro).toFixed(2);			
				
			}

			if(opcao==5){
				document.getElementById("valorFinal").innerHTML = (valor/libra).toFixed(2);			
				
			}

			if(opcao==6){
				document.getElementById("valorFinal").innerHTML = (valor/pesoArgentino).toFixed(2);			
				
			}
					
		}
		