// Clase Rectángulo

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
      }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
      }
    }

// Función para obtener los valores y mostrar resultados

function calcular() {
    const ancho = parseFloat(document.getElementById("ancho").value);
    const alto = parseFloat(document.getElementById("alto").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
        resultadoDiv.innerHTML = "⚠️ Por favor ingrese valores válidos y positivos.";
        resultadoDiv.style.color = "red";
        return;
    }

    const rectangulo = new Rectangulo(ancho, alto);
    const area = rectangulo.calcularArea();
    const perimetro = rectangulo.calcularPerimetro();

    resultadoDiv.style.color = "black";
    resultadoDiv.innerHTML = `
        📏 Ancho: ${ancho} <br>
        📐 Alto: ${alto} <br><br>
        🔸 Área: ${area} <br>
        🔹 Perímetro: ${perimetro}`;
    }