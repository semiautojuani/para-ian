class pantalla {
  constructor() {
    this.posX = 0;
    this.posY = 0;
    this.ancho = width;
    this.alto = height;
    this.pantallasArreglo = [];

    for (let i = 0; i <= 5; i++) {
      this.pantallasArreglo[i] = loadImage("data/pantalla" + i + ".png");
    }
  }

  mostrarPantalla(index) {
    image(this.pantallasArreglo[index], this.posX, this.posY, this.ancho, this.alto);
  }
}
