const sectionReiniciar = document.getElementById('reiniciar');
const sectionSeleccionarMascota = document.getElementById('seleciconar-mascota');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonReiniciar = document.getElementById('boton-reiniciar');

const sectionSeleccionarAtaque = document.getElementById('seleciconar-ataque');

const spanMascotaJugador = document.getElementById('mascota-jugador');

const spanMascotaEnemigo = document.getElementById('mascota-enemigo');

const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-Enemigo');

const sectionMensajes = document.getElementById('Resultado');
const AtaquesDelJugador = document.getElementById('Ataques-Del-Jugador');
const AtaquesDelEnemigo = document.getElementById('Ataques-Del-Enemigo');

const contenedorTarjetas = document.getElementById('contenedor-tarjetas');

const contenedorBotonesDeAtaque = document.getElementById('botones-de-ataque');

let mokepones = [];
let ataquesMokeponEnemigo;
let ataqueJugador = [];
let ataqueEnemigo = [];
let vidasJugador = 3;
let vidasEnemigo = 3;
let opcionDeMokepones;

let inputhipodoge;
let inputCapipepo;
let inputRatigueya;

let mascotaJugador;

let botonFuego;
let botonAgua;
let botonTierra;

let botones = [];


class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5);
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5);
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5);


hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌲', id: 'boton-Tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
);

capipepo.ataques.push(
    { nombre: '🌲', id: 'boton-Tierra' },
    { nombre: '🌲', id: 'boton-Tierra' },
    { nombre: '🌲', id: 'boton-Tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
);

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌲', id: 'boton-Tierra' },
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
    sectionReiniciar.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'none';
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    botonReiniciar.addEventListener('click', reiniciarJuego);

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `<input type="radio" name="mascota" id=${mokepon.nombre} />
                <label id = "TarjetaHipodoge" class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                    <p>${mokepon.nombre}</p>
                    <img src=${mokepon.foto} alt=${mokepon.nombre}>
                </label> 
            `
        contenedorTarjetas.innerHTML += opcionDeMokepones;

        inputhipodoge = document.getElementById('Hipodoge');
        inputCapipepo = document.getElementById('Capipepo');
        inputRatigueya = document.getElementById('Ratigueya');

    });
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';

    if (inputhipodoge.checked) {
        spanMascotaJugador.innerHTML = inputhipodoge.id;
        mascotaJugador = inputhipodoge.id;
    }
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;

    }
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;
    }
    else {
        alert("seleccione un mokepon")
    }

    extraerAtaques(mascotaJugador);
    seleccionarMascotaDelEnemigo();
}

function extraerAtaques(mascotaJugador) {
    let ataquesMokepon;
    for (let i = 0; i < mokepones.length; i++) {
        if (mokepones[i].nombre === mascotaJugador) {
            ataquesMokepon = mokepones[i].ataques;
        }
    }

    mostrarAtaques(ataquesMokepon);
}

function mostrarAtaques(ataquesMokepon) {

    ataquesMokepon.forEach((ataque) => {
        ataqueMokepon = `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>            
        `
        contenedorBotonesDeAtaque.innerHTML += ataqueMokepon;
    })

    botonFuego = document.getElementById('boton-fuego');
    botonAgua = document.getElementById('boton-agua');
    botonTierra = document.getElementById('boton-Tierra');

    botones = document.querySelectorAll('.BAtaque');

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '🌲') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            EjecutarAtaqueEnemigo();

        })

    });

}

function seleccionarMascotaDelEnemigo() {
    let MascotaAleatoria = aleatorio(0, mokepones.length - 1);

    spanMascotaEnemigo.innerHTML = mokepones[MascotaAleatoria].nombre;
    ataquesMokeponEnemigo = mokepones[MascotaAleatoria].ataques;
    secuenciaAtaque();
}

function EjecutarAtaqueEnemigo() {
    let CargarAtaqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

    if (CargarAtaqueAleatorio == 0 || CargarAtaqueAleatorio == 1) {
        ataqueEnemigo.push('Fuego');
    }
    else if (CargarAtaqueAleatorio == 3 || CargarAtaqueAleatorio == 4) {
        ataqueEnemigo.push('Agua');
    }
    else {
        ataqueEnemigo.push('Tierra');
    }
    console.log(ataqueEnemigo);
    Combate();
}

function Combate() {
    if (ataqueJugador == ataqueEnemigo) {
        CrearMensaje(" Empate");
    }
    else if ((ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') || (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') || (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua')) {
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

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego)