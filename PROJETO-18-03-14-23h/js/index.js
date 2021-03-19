function alteraTema(opcao) {
    if (opcao == 1) {
        document.getElementById('sobre').className = 'sobreTemaEscuro'
        document.getElementById('menu').className = 'menuTemaEscuro'
        document.getElementById('conteudo_box3').className = 'box3TemaEscuro'
    } else {
        document.getElementById('sobre').className = 'sobre'
        document.getElementById('menu').className = 'menu'
        document.getElementById('conteudo_box3').className = 'box3'
    }
}


function aumentaFonte(opcao) {
    if (opcao == 1) {
        document.getElementById('li-fonte1').className = 'fonteGrande';
        document.getElementById('li-fonte2').className = 'fonteGrande';
        document.getElementById('li-fonte3').className = 'fonteGrande';
        document.getElementById('p-fonte1').className = 'fonteGrande';
        document.getElementById('p-fonte2').className = 'fonteGrande';
        document.getElementById('p-fonte3').className = 'fonteGrande';
        document.getElementById('p-fonte4').className = 'fonteGrande';
        document.getElementById('p-fonte5').className = 'fonteGrande';
    } else {
        document.getElementById('li-fonte1').className = 'fontePadrao';
        document.getElementById('li-fonte2').className = 'fontePadrao';
        document.getElementById('li-fonte3').className = 'fontePadrao';
        document.getElementById('p-fonte1').className = 'fontePadrao';
        document.getElementById('p-fonte2').className = 'fontePadrao';
        document.getElementById('p-fonte3').className = 'fontePadrao';
        document.getElementById('p-fonte4').className = 'fotePadrao';
        document.getElementById('p-fonte5').className = 'fontePadrao';
    }
}