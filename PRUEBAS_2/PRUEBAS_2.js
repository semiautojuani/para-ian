// link: https://youtu.be/lfnTHDRwEfQ
// trabajo hecho en conjunto con Juan Ignacio Ventimiglia

let objJuego;
let fondo, pj, villano, aliado, proyectil, intro;
let cancionFondo;
let pantallaActual = "inicio";
let pantallas = [];

function preload(){
  pj = loadImage('data/heroe0.png');
  villano = loadImage('data/villano3.png');
  aliado = loadImage('data/amigo1.png');
  proyectil = loadImage('data/fuego0.png');
  
  cancionFondo = loadSound('data/sonido.mp3');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new juego();
  
  cancionFondo.setVolume(0.05);
  
  pantallas["inicio"] = mostrarInicio;
  pantallas["instrucciones"] = mostrarInstrucciones;
  pantallas["juego"] = mostrarJuego;
  pantallas["ganar"] = mostrarGanar;
  pantallas["perder"] = mostrarPerder;
  pantallas["creditos"] = mostrarCreditos;
}

function draw() {
  background(200);
  
   if (pantallas[pantallaActual]) {
    pantallas[pantallaActual]();
    } else {
    console.error(`Estado desconocido: ${pantallaActual}`);
   }
}



function keyPressed() {
  if (pantallaActual === "juego") {
    objJuego.teclaPresionada(keyCode);
  }
}
