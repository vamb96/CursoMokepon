const sectionReiniciar = document.getElementById('reiniciar');
const sectionSeleccionarMascota = document.getElementById('seleciconar-mascota');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-Tierra');
const botonReiniciar = document.getElementById('boton-reiniciar');

const sectionSeleccionarAtaque = document.getElementById('seleciconar-ataque');
const inputhipodoge = document.getElementById('Hipodoge');
const inputCapipepo = document.getElementById('Capipepo');
const inputRatigueya = document.getElementById('Ratigueya');
const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-Enemigo');

const sectionMensajes = document.getElementById('Resultado');
const AtaquesDelJugador = document.getElementById('Ataques-Del-Jugador');
const AtaquesDelEnemigo = document.getElementById('Ataques-Del-Enemigo');

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5);
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5);
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5);



function iniciarJuego() {
    sectionReiniciar.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'none';
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);
    botonFuego.addEventListener('click',ataqueFuego);
    botonAgua.addEventListener('click',ataqueAgua);
    botonTierra.addEventListener('click',ataqueTierra);
    botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';

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
        CrearMensajeFinal("🎉🎉🎉 🎉 Gantaste 🎉🎉🎉🎉");
    }
    else if (vidasEnemigo == 0) {
        CrearMensajeFinal("☠️☠️☠️☠️ Perdiste ☠️☠️☠️☠️");
    }

}

function CrearMensaje(resultado) {
    let nuevoAtaqueDeljugador = document.createElement('p');
    let nuevoAtaquesDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDeljugador.innerHTML = ataqueJugador
    nuevoAtaquesDelEnemigo.innerHTML = ataqueEnemigo
    

    AtaquesDelJugador.appendChild(nuevoAtaqueDeljugador);
    AtaquesDelEnemigo.appendChild(nuevoAtaquesDelEnemigo);
}

function CrearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal;
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
    location.reload();
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

window.addEventListener('load', iniciarJuego)