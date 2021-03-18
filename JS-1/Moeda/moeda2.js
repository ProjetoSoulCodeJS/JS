
		var valor;
        var valor2;
        var valor3 = valor * valor2


	
		function conversao(){
			var dolarAmericano = 5.53577;
			var dolarCanadense = 4.45637;

			var euro = 6.60912;
			var libra = 7.72198;
			var pesoArgentino = 0.06065;
			
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
			
			if(opcao==2){
			  resultado = document.getElementById("valorFinal").innerHTML = (valor/dolarCanadense * dolarAmericano).toFixed(2);			
				
			}
			
			if(opcao==3){
			  resultado = document.getElementById("valorFinal").innerHTML = (valor/realBrasileiro).toFixed(2);			
				
			}
			
			if(opcao==4){
			  resultado = document.getElementById("valorFinal").innerHTML = (valor/euro).toFixed(2);			
				
			}

			if(opcao==5){
			  resultado = document.getElementById("valorFinal").innerHTML = (valor/libra).toFixed(2);			
				
			}

			if(opcao==6){
			   resultado = document.getElementById("valorFinal").innerHTML = (valor/pesoArgentino).toFixed(2);			
			}
            if(opcao == 1 && opcao2 == 7)
			  resultado = document.getElementById("valorFinal").innerHTML = (valor/2).toFixed(2);
		}
		