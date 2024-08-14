let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste El Número En ${intentos} ${(intentos === 1) ? 'Vez' : 'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El Usuario No Acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El Número Secreto Es Menor');
        } else {
            asignarTextoElemento('p','El Número Secreto Es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si Ya Sorteamos Todos Los Números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya Se Sortearon Todos Los Números Posibles');
    } else {
        //Si El Número Generado Está Incluido En La Lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego Del Número Secreto!');
    asignarTextoElemento('p',`Indica Un Número Del 1 Al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicar Mensaje De Intervalo De Números 
    //Generar El Número Aleatorio
    //Inicializar El Número Intentos
    condicionesIniciales();
    //Deshabilitar El Botón De Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();