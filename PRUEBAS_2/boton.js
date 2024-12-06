class boton {
  constructor(x, y, an, al, texto, siguientePantalla) {
    this.X = x;
    this.Y = y;
    this.An = an;
    this.Al = al;
    this.texto = texto;
    this.posicionMouse();
    this.siguientePantalla = siguientePantalla;
  }

  mostrar() {
    if (this.posicionMouse()) {
      fill(210, 180, 140);
    } else {
      fill(77, 51, 25);
    }
    rect(this.X, this.Y, this.An, this.Al);
    
    push();
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text(this.texto, this.X + this.An / 2, this.Y + this.Al / 2);
    pop();
  }
  
  posicionMouse() {
    return mouseX > this.X && mouseX < this.X + this.An && mouseY > this.Y && mouseY < this.Y + this.Al;
  }
  
  click() {
    if (this.posicionMouse()) {
      pantallaActual = this.siguientePantalla; // Cambia a la siguiente pantalla
    }
  }
}

function mousePressed() {
  if (pantallaActual === "inicio") {
    if (objJuego.botonComenzar.posicionMouse()) {
      pantallaActual = objJuego.botonComenzar.siguientePantalla;
    }
  } else if (pantallaActual === "instrucciones") {
    if (objJuego.botonJugar.posicionMouse()) {
      pantallaActual = objJuego.botonJugar.siguientePantalla;
    }
  } else if (pantallaActual === "ganar" || pantallaActual === "perder") {
    if (objJuego.botonCreditos.posicionMouse()) {
      pantallaActual = objJuego.botonCreditos.siguientePantalla;
    }
  } else if (pantallaActual === "creditos") {
    if (objJuego.botonReiniciar.posicionMouse()) {
      pantallaActual = objJuego.botonReiniciar.siguientePantalla;
    }
  }
}
