class recompensa {
  constructor(posX, posY, img) {
    this.posX = posX;
    this.posY = posY;
    this.img = img;
    this.miColor = color(255, 255, 0);
    this.agarroRecompensa = false;
  }

  dibujar() {
    //fill(this.miColor);
    //ellipse(this.posX, this.posY, 50, 70);
    image(this.img, this.posX - 30, this.posY - 50, 50, 70);
  }

  colisionConRecompensa(personaje) {
    if (dist(this.posX, this.posY, personaje.posX, personaje.posY) < 25) {
      this.agarroRecompensa = true;
    }
  }
}
