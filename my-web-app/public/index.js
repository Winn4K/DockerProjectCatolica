const imgLampada = document.getElementById("imgLampada");

var lampadaQuebrada = false;

function quebrarLampada() {
    imgLampada.setAttribute('src', '/styles/imgs/lampadaQuebrada.svg')
    lampadaQuebrada = true;
}

function ligarLampada() {
    if (lampadaQuebrada == false) {
        imgLampada.setAttribute('src', '/styles/imgs/lampadaAcesa.svg')
    }
}

function apagarLampada() {
    if (lampadaQuebrada == false) {
        imgLampada.setAttribute('src', '/styles/imgs/lampadaApagada.svg')
    }
}