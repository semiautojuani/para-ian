class bala {
  constructor(posX, posY, img){
    this.posX = posX;
    this.posY = posY;
    this.img = img;
    this.disparada = false;
  }

  dibujar() {
    if (this.disparada) {
      image(proyectil, this.posX - 30, this.posY - 30, 50, 50);
      this.mover();
    }
  }

  mover() {
    if (this.velocidadRapida) {
      this.posX -= 40; // Balas se mueven más rápido si la bandera es verdadera
    } else {
      this.posX -= 10; // Velocidad normal de las balas
    }
  }

  disparar() {
    this.disparada = true;
  }

  setVelocidadRapida(estado) {
    this.velocidadRapida = estado;
  }
}
