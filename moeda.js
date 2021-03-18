
		var valor;			
	
		function conversao(){
			var dolarAmericano = 3.44;
			var dolarCanadense = 2.44;
            var realBrasileiro = 2.35;
			var euro = 3.70;
			var libra = 4.27;
			var pesoArgentino = 0.22;
			
			valor = parseFloat(document.getElementById("text2").value);
			var opcao = document.getElementById("opções").value;
				
			
			if(isNaN(valor)){
				alert("Apenas numeros devem ser informados");				
			}	
			
			if(opcao==1){
				document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano).toFixed(2);			
				
			}
			
			if(opcao==2){
				document.getElementById("valorFinal").innerHTML = (valor/dolarCanadense).toFixed(2);			
				
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
		