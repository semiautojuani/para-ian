class recompensa {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.agarroRecompensa = false;
  }

  dibujar() {
    if (!this.agarroRecompensa) {
      image(this.img, this.x, this.y);
    }
  }

  colisionConRecompensa(personaje) {
    if (dist(this.x, this.y, personaje.posX, personaje.posY) < 40) {
      this.agarroRecompensa = true;
    }
  }
}
