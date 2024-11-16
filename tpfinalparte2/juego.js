class juego {
  constructor() {
    this.crearRecompensa();
    this.crearEnemigos();
    this.crearPlataforma();
    this.crearPersonaje();
  }

  crearPersonaje() {
    this.personaje = new personaje(width/2, 465, pj); // Crear el personaje
  }

  crearEnemigos() {
    this.enemigos = [];
    let tiempos = [5000, 3000, 7000, 2000, 4000, 6000];
    for (let i = 0; i < 6; i++) {
      this.enemigos.push(new enemigo(600, i * 80 + 50, tiempos[i], villano));
    }
  }

  crearPlataforma() {
    this.plataforma = new plataforma();
  }

  crearRecompensa() {
    this.recompensa = new recompensa(348, 60, aliado); // Colocar la recompensa en la posición inicial
  }

  dibujar() {
    if (!this.personaje) {
      console.error("El personaje no está definido.");
      return;
    }

    if (this.personaje.juegoTerminado) {
      this.reiniciarJuego();
    } else if (this.recompensa.agarroRecompensa) {
      this.reiniciarJuego();
      this.ajustarVelocidadBalas(); // Ajusta la velocidad de las balas si la recompensa fue tomada
    } else {
      for (let enemigo of this.enemigos) {
        enemigo.dibujar();
      }

      this.personaje.dibujar();
      this.plataforma.dibujar();
      this.recompensa.dibujar();

      // Verificar si el personaje ha recogido la recompensa
      this.recompensa.colisionConRecompensa(this.personaje);

      // Verificar si alguna bala colisionó con el personaje
      for (let enemigo of this.enemigos) {
        this.personaje.colisionConBala(enemigo.balas);
      }
    }
  }

  reiniciarJuego() {
    // Reiniciar todos los elementos del juego
    this.personaje = new personaje(width / 2, 465, pj); // Restablecer la posición del personaje
    this.enemigos = [];
    let tiempos = [5000, 3000, 7000, 2000, 4000, 6000];
    for (let i = 0; i < 6; i++) {
      this.enemigos.push(new enemigo(600, i * 80 + 50, tiempos[i], villano));
    }
    this.recompensa = new recompensa(348, 72, aliado); // Restablecer la recompensa
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode); // Llamamos al método del personaje
    for (let enemigo of this.enemigos) {
      enemigo.teclaPresionada(keyCode);
    }
  }

  ajustarVelocidadBalas() {
    // Activar la velocidad rápida de las balas si el personaje tomó la recompensa
    for (let enemigo of this.enemigos) {
      for (let bala of enemigo.balas) {
        bala.setVelocidadRapida(true);
      }
    }
  }
}
