function conversao() {
    var valores = document.getElementById('option').value
    var valores2 = document.getElementById('option2').value
    var input_texto = document.getElementById('valor').value

    if (valores == 5.584 && valores2 == 0.0179){
    alert ("As moedas precisam ser diferentes")
    location.reload();
    return
    }

    else if (valores == 4.496 && valores2 == 0.0222){
    alert ("As moedas precisam ser diferentes")
    location.reload();
    return
    }

    else if (valores == 1 && valores2 == 1){
    alert ("As moedas precisam ser diferentes")
    location.reload();
    return
    }

    else if (valores == 6.733 && valores2 == 0.148){
    alert ("As moedas precisam ser diferentes")
    location.reload();
    return
    }

    else if (valores == 7.854 && valores2 == 0.127){
    alert ("As moedas precisam ser diferentes")
    location.reload();
    return
    }

    else if (valores == 0.0607 && valores2 == 16.666){
    alert ("As moedas precisam ser diferentes")
    location.reload();
    return
    }

    else if (valores == 4.496 && valores2 == 0.222 ){
    alert ("As moedas precisam ser diferentes")
    location.reload();
    return 
    }

    else if (valores == 4.496 && valores2 == 0.0179 ){
    resultado = (valores * valores2 * input_texto * 10)
    return 
    }

    else if (valores == 1 && valores2 == 0.0179 ){
    resultado = (valores * valores2 * input_texto * 10)
    return 
    }

    else if (input_texto < 0){
    alert("Não pode digitar números menor que 0")
    location.reload();
    return
    }
    

    resultado = (valores * valores2 * input_texto)
    console.log(resultado)
    console.log(valores)
    console.log(input_texto)

    // document.getElementById('valorFinal').value = resultado
    // document.getElementById("valorFinal").value = resultado.toFixed(2)
}


function result(){
    document.getElementById('valorFinal').innerHTML = resultado.toFixed(2)
    }