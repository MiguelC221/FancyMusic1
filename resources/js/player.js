class ReproductorMusica {
  constructor() {
    this.tituloCancion = document.querySelector(".reproductor-musica h1");
    this.nombreArtista = document.querySelector(".reproductor-musica p");
    this.progreso = document.getElementById("progreso");
    this.cancion = document.getElementById("cancion");
    this.iconoControl = document.getElementById("iconoControl");
    this.botonReproducirPausar = document.querySelector(".controles button.boton-reproducir-pausar");
    this.botonAtras = document.querySelector(".controles button.atras");
    this.botonAdelante = document.querySelector(".controles button.siguiente");
    this.canciones = [
      // Lista de canciones
    ];
  }

  // Métodos para controlar la reproducción de música
}

const reproductor = new ReproductorMusica();