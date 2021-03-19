// ---- VALIDAÇÃO E-MAIL ----  //
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        document.getElementById("email").innerHTML = "E-mail válido";
        // alert("E-mail válido!");
    } else {
        document.getElementById("email").innerHTML = "<font color='red'>E-mail inválido </font>";
        alert("E-mail inválido!");
    }
}


//  ---- VALIDAÇÃO CPF ---- //
function valida() {
    if (!VerificaCPF(document.getElementById('cpf').value))
        alert('CPF Inválido');
}

function VerificaCPF(strCpf) {

    var soma;
    var resto;
    soma = 0;
    if (strCpf == "00000000000") {
        return false;
    }

    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }

    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(strCpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;

    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    if (resto != parseInt(strCpf.substring(10, 11))) {
        return false;
    }
    return true;
}


// ---- Campo NOME para UPPERCASE ----  //
function nomeLetrasMaiusculas() {

    var entrada = document.getElementById('nome')
    entrada.value = entrada.value.toUpperCase();

}


//  ---- VALIDAÇÃO DATA DE NASCIMENTO ---  //

//  ---- DIA ---  //
function dataNascimentoDia() {

    var diaNascimento = parseInt(document.getElementById('diaNascimento').value)

    if (diaNascimento < 1 || diaNascimento > 31) {
        alert('Data inválida! Por favor insira o dia do seu nascimento')
    }
    var diaUsuario = Number(diaNascimento);
return diaUsuario
         
}


//  ---- ANO ---  //
function dataNascimentoAno() {
    var anoNascimento = parseInt(document.getElementById('anoNascimento').value)

    if (anoNascimento < 1981 || anoNascimento > 2021) {
        alert('Data inválida! Por favor insira o ano do seu nascimento, entre 1891 e 2021')
    }
    return anoNascimento
}

//  ---- MÊS ---  //
function mes() {
    var mesNasc = document.getElementById('mesNascimento').value
   console.log(mesNasc)
    return mesNasc
}

//  ---- IDADE DO USUÁRIO ----  //
function idadeUsuario() {
    var diaBase = 16
    var anoBase = 2021
    var mesBase = 3
    var mesNasc = document.getElementById('mesNascimento').value
    var anoNascimento = parseInt(document.getElementById('anoNascimento').value)
    var diaUsuario = parseInt(document.getElementById('diaNascimento').value)

    var idade = anoBase - anoNascimento;
   
    console.log(anoNascimento)
    console.log(diaUsuario)
    console.log(mesNasc)

    if (mesBase < mesNasc) {
        idade--;
    } else {
        if (mesBase == mesNasc) {
            if (diaBase< diaUsuario) {
                idade--;
            }
        }
    }
    return idade;   
}

//  ---- ESCREVER NA TELA ----  //
function escreve() {
    var nome = document.getElementById('nome').value
    var cpf = document.getElementById('cpf').value
    var email = document.getElementById('email').value;
    var sexo = document.getElementById('sexo').value;

    document.getElementById('info').innerHTML = `Olá, ${nome}! <br>Seu login é ${email}<br> Você tem ${idadeUsuario()} anos <br> Se define como uma pessoa do sexo ${sexo} <br> Pode usar ${cpf} como senha`
}