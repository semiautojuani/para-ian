class personaje {
  constructor(posX, posY, img) {
    this.posX = posX;
    this.posY = posY;
    this.img = img;
    this.miColor = color(255, 0, 0);
    this.vida = 1;
    this.bala = new bala();
    this.juegoTerminado = false;
  }

  dibujar() {
    image(this.img, this.posX, this.posY);
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.posX -= 5;
    }
    if (keyCode === RIGHT_ARROW) {
      this.posX += 5;
    }
  }

  colisionConBala(balas) {
    // Lógica para detectar colisión con las balas
  }
}

class enemigo {
  constructor(x, y, tiempo, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.balas = [];
  }

  dibujar() {
    image(this.img, this.x, this.y);
  }

  teclaPresionada(keyCode) {
    // Lógica para que los enemigos reaccionen a teclas
  }
}
