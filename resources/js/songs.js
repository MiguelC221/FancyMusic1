const tituloCancion = document.querySelector(".reproductor-musica h1");
const nombreArtista = document.querySelector(".reproductor-musica p");

const progreso = document.getElementById("progreso");
const cancion = document.getElementById("cancion");

const iconoControl = document.getElementById("iconoControl");
//const botonReproducirPausar = document.querySelector(
  ".controls button.play"

const botonReproducirPausar = document.getElementById(
    "button.play"
  );

console.log(botonReproducirPausar)

const botonAtras = document.querySelector(".controles button.atras");
const botonAdelante = document.querySelector(".controles button.siguiente");


const canciones = [
  {
    titulo: "You & I",
    nombre: "GEOXOR",
    fuente: "music/01 Geoxor - You   I.mp3",
  },
  {
    titulo: "Faerie",
    nombre: "GEOXOR",
    fuente: "music/Geoxor - Faerie.mp3",
  },
  {
    titulo: "I Like You",
    nombre: "GEOXOR",
    fuente: "music/Geoxor - I Like You.flac",
  },
  {
    titulo: "I'm Here",
    nombre: "GEOXOR",
    fuente: "music/Geoxor - I m Here.mp3",
  },
  {
    titulo: "Silverdust",
    nombre: "GEOXOR",
    fuente: "music/Geoxor - Silverdust.mp3",
  },
  {
    titulo: "Let You Go",
    nombre: "GEOXOR",
    fuente: "music/Geoxor & Dritic - Let You Go.flac",
  },
];

let inidceCancionActual = 3;

function actutualizarInfoCancion() {
  tituloCancion.textContent = canciones[inidceCancionActual].titulo;
  nombreArtista.textContent = canciones[inidceCancionActual].nombre;
  cancion.src = canciones[inidceCancionActual].fuente;
  cancion.addEventListener("loadeddata", function () {});
}

cancion.addEventListener('loadedmetadata', function(){
  progreso.max = cancion.duration;
  progreso.value = cancion.currentTime;
})

botonReproducirPausar.addEventListener("click", reproducirPausar);

function reproducirPausar() {
  if (cancion.paused) {
    reproducirCancion();
  } else {
    pausarCancion();
  }
}

function reproducirCancion() {
  cancion.play();
  iconoControl.classList.add("bi-pause-fill");
  iconoControl.classList.remove("bi-play-circle-fill");
}

function pausarCancion() {
  cancion.pause();
  iconoControl.classList.remove("bi-pause-fill");
  iconoControl.classList.add("bi-play-circle-fill");
}

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime;
    }
})

progreso.addEventListener('input', function(){
  cancion.currentTime = progreso.value
})

progreso.addEventListener('change', function(){
  reproducirCancion();
})

botonAdelante.addEventListener('click', ()=>{
  inidceCancionActual = (inidceCancionActual + 1) % canciones.length
  actutualizarInfoCancion();
  reproducirCancion()
})

botonAtras.addEventListener('click', ()=>{
  inidceCancionActual = (inidceCancionActual -1 + canciones.length) % canciones.length
  actutualizarInfoCancion();
  reproducirCancion()
})

actutualizarInfoCancion();
