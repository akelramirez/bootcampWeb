/// tradicional
function calculaAreaRectangulo(base, altura) {
  let area = base * altura;
  return area;
}

// ES6 2016
calcularAreaCuadrado = (lado) => {
  let area = Math.pow(lado, 2);
  return area;
};

calcularAreaCirculo = (radio) => {
  const PI = 3.1416;
  let area = PI * Math.pow(radio, 2);
  return Math.round(area * 100) / 100;
};

console.log("El area de tu rectangulo es: ", calculaAreaRectangulo(5, 3));
console.log("El area de tu cuadrado es: ", calcularAreaCuadrado(4));
console.log("El area de tu circulo es: ", calcularAreaCirculo(3));
