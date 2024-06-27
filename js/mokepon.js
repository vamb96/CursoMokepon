let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('reiniciar');
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionReiniciar = document.getElementById('seleciconar-ataque');
    sectionReiniciar.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click',ataqueFuego);

    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click',ataqueAgua);

    let botonTierra = document.getElementById('boton-Tierra');
    botonTierra.addEventListener('click',ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);

}

function ataqueFuego(){
    ataqueJugador = 'Fuego';
    EjecutarAtaqueEnemigo();
}

function ataqueAgua(){
    ataqueJugador = 'Agua';
    EjecutarAtaqueEnemigo();  
}

function ataqueTierra(){
    ataqueJugador = 'Tierra';
    EjecutarAtaqueEnemigo();
}

function EjecutarAtaqueEnemigo(){
    CargarAtaque = aleatorio(1,3);

    if (CargarAtaque == 1){
        ataqueEnemigo = 'Fuego';
    }
    else if (CargarAtaque == 2){
        ataqueEnemigo = 'Agua';
    }
    else if (CargarAtaque == 3){
        ataqueEnemigo = 'Tierra';
    }

    Combate();
}

function Combate() {    
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-jugadorEnemigo');


    if (ataqueJugador == ataqueEnemigo) {
        CrearMensaje(" Empate");
    }
    else if ((ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') || (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') || (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua')){
        CrearMensaje(" 🎉 Ganaste 🎉");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    }
    else {
        CrearMensaje(" ☠️ Perdiste ☠️");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    ResultadoCombate()         
}

function ResultadoCombate() {
    if (vidasJugador == 0) {
        CrearMensajeFinal("🎉🎉🎉🎉🎉🎉🎉 Gantaste 🎉🎉🎉🎉🎉🎉🎉");
    }
    else if (vidasEnemigo == 0) {
        CrearMensajeFinal("☠️☠️☠️☠️☠️☠️☠️ Perdiste ☠️☠️☠️☠️☠️☠️☠️");
    }

}

function CrearMensaje(resultado) {
    let sectionMensajes = document.getElementById('Mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu mascota ataco con '+ ataqueJugador +', las mascota del enemigo ataco con '+ ataqueEnemigo + resultado ;

    sectionMensajes.appendChild(parrafo);
}

function CrearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('Mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal;

    sectionMensajes.appendChild(parrafo);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-Tierra');
    botonTierra.disabled = true;
    let sectionSeleccionarAtaque = document.getElementById('reiniciar');
    sectionSeleccionarAtaque.style.display = 'block';
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleciconar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

    let sectionSeleccionarAtaque = document.getElementById('seleciconar-ataque');
    sectionSeleccionarAtaque.style.display = 'block';

    let inputhipodoge = document.getElementById('Hipodoge');
    let inputCapipepo = document.getElementById('Capipepo');
    let inputRatigueya = document.getElementById('Ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if (inputhipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }
    else if(inputCapipepo.checked){ 
        spanMascotaJugador.innerHTML = 'Capipepo'
    }
    else if(inputRatigueya.checked){ 
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }
    else {
        alert("seleccione un mokepon")
    }
    seleccionarMascotaDelEnemigo();
}

function seleccionarMascotaDelEnemigo() {
    let MascotaAleatoria = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');


    if (MascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }
    else if (MascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }
    else if (MascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

window.addEventListener('load', iniciarJuego)