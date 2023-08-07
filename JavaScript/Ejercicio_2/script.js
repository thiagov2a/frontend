var radio;
var area;
var perimetro;
var mensaje;

function calcularAreaYPerimetro() {
  radio = prompt("Ingrese un valor para el radio:");

  if (radio !== null && radio.trim() !== "") {
    area = Math.PI * radio ** 2;
    perimetro = 2 * Math.PI * radio;
    mensaje = "Area: " + area + "\n" + "Perimetro: " + perimetro;
    alert(mensaje);
  } else {
    alert("Por favor, ingrese un radio válido.");
  }
}

document.getElementById("btn").onclick = calcularAreaYPerimetro;
