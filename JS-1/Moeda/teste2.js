
//-----------------------------------------------------

function moeda2(z,vlr){  

    v = z.value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2")	//coloca virgula antes dos últimos 2 digitos
    z.value = v;

    total=v.replace(",", ".")*vlr;

    document.getElementById('moeda').value = total.toFixed(2).toString().replace(".", ",");
    document.getElementById('dolar').size=9;
    document.getElementById('moeda').size=5;
    //alert(document.getElementById('moeda2').innerHTML);
}

    function moeda3(z,vlr){  

    v = z.value;
    v=v.replace(/\D/g,"")  //permite digitar apenas números
    v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
    v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2")	//coloca virgula antes dos últimos 2 digitos
    z.value = v;

    total=v.replace(",", ".")/vlr;

    document.getElementById('dolar').value = total.toFixed(2).toString().replace(".", ",");
    document.getElementById('moeda').size=9;
    document.getElementById('dolar').size=5;

}

        function conversor(n){  
    

    
        document.getElementById("carrega").innerHTML = "calculando....";



        var usd =   "5.53577";
        var usdaus =   "4.31994";
        var usdcan =   "4.45637";
        
        var euro =   "6.60912";
        var arg =   "0.06065";
        var par =   "0.00084";
        var uru =   "0.12442";
        var chile =   "0.0077";
        var suico =   "5.97116";	
        var china =   "0.85083";		
        var japao =   "0.05082";
        var libra =   "7.72198";
        var mxn =   "0.2712";
        var cop =   "0.00155";
        var vef =   "0.55427"; 

        var rub =   "0.07472"; 
        var inr =   "0.07624"; 
        var idr =   "0.00038"; 
        var sgd =   "4.12554"; 
        var aed =   "1.50714"; 

                                                                                
        var e = document.getElementById("s1");
        var itemSelecionado = e.options[e.selectedIndex].value;
        var e2 = document.getElementById("s2");
        var itemSelecionado2 = e2.options[e2.selectedIndex].value;	
        
    if(e.value != "0" && e2.value != "0"){	
        z=document.getElementById("conversor");
        vlr=document.getElementById("conversor2");
        //vlr=vlr.replace(",", ".");
        v = z.value.replace(",", ".");
        v=v.replace(/\D/g,"")  //permite digitar apenas números
        v=v.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
        v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2")	//coloca virgula antes dos últimos 2 digitos
        z.value = v;

        vlr=document.getElementById("conversor2");
        //vlr=vlr.replace(",", ".");
        v2 = vlr.value.replace(",", ".");
        v2=v2.replace(/\D/g,"")  //permite digitar apenas números
        v2=v2.replace(/[0-9]{12}/,"inválido")   //limita pra máximo 999.999.999,99
        v2=v2.replace(/(\d{1})(\d{1,2})$/,"$1,$2")	//coloca virgula antes dos últimos 2 digitos
        vlr.value = v2;
        
        if (n==1){
            var num=v.replace(",", ".");	
        }
        if (n==2){
            var num=v2.replace(",", ".");	
        }		
    
        switch (itemSelecionado) {
            case "brl":
                var cota = 1.00;
                break;
            case "usd":
                var cota = 5.5471;
                break;
            case "euro":
                var cota = 6.6197;
                break;
            case "arg":
                var cota = arg;
                break;	
            case "libra":
                var cota = libra;
                break;
            case "japao":
                var cota = japao;
                break;		
            case "usdaus":
                var cota = usdaus;
                break;	
            case "usdcan":
                var cota = usdcan;
                break;			
            case "china":
                var cota = china;
                break;
            case "suico":
                var cota = suico;
                break;	
            case "par":
                var cota = par;
                break;
            case "uru":
                var cota = uru;
                break;
            case "chile":
                var cota = chile;
                break;	
            case "mxn":
                var cota = mxn;
                break;
            case "cop":
                var cota = cop;
                break;	
            case "vef":
                var cota = vef;
                break;	
            case "rub":
                var cota = rub;
                break;
            case "idr":
                var cota = idr;
                break;
            case "inr":
                var cota = inr;
                break;
            case "sgd":
                var cota = sgd;
                break;
            case "aed":
                var cota = aed;
                break;				
        } 	
        switch (itemSelecionado2) {
            case "brl":
                var cota2 = 1.00;
                break;
            case "usd":
                var cota2 = usd;
                break;
            case "euro":
                var cota2 = euro;
                break;
            case "arg":
                var cota2 = arg;
                break;
            case "libra":
                var cota2 = libra;
                break;
            case "japao":
                var cota2 = japao;
                break;	
            case "usdaus":
                var cota2 = usdaus;
                break;	
            case "usdcan":
                var cota2 = usdcan;
                break;
            case "china":
                var cota2 = china;
                break;
            case "suico":
                var cota2 = suico;
                break;	
            case "par":
                var cota2 = par;
                break;
            case "uru":
                var cota2 = uru;
                break;
            case "chile":
                var cota2 = chile;
                break;	
            case "mxn":
                var cota2 = mxn;
                break;	
            case "cop":
                var cota2 = cop;
                break;	
            case "vef":
                var cota2 = vef;
                break;				
            case "rub":
                var cota = rub;
                break;
            case "idr":
                var cota = idr;
                break;
            case "inr":
                var cota = inr;
                break;
            case "sgd":
                var cota = sgd;
                break;
            case "aed":
                var cota = aed;
                break;
        } 

        if (n==1){
            total=num*(cota/cota2);
            document.getElementById('conversor2').value = total.toFixed(2).toString().replace(".", ",");
        }
        if (n==2){
            total=num*(cota2/cota);
            document.getElementById('conversor').value = total.toFixed(2).toString().replace(".", ",");
        }
    }
        //alert(document.getElementById('moeda2').innerHTML);
        //});
        
        document.getElementById("carrega").innerHTML = "";
    
}
