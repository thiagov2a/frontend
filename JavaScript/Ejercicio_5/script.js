var num1;
var num2;
var opc;

function calculadora() {
  while (isNaN(num1) || num1 === "" || num1 === " ") {
    num1 = prompt("Ingrese un primer número:");
    num1 = parseInt(num1);
  }

  while (isNaN(num2) || num2 === "" || num2 === " ") {
    num2 = prompt("Ingrese un segundo número:");
    num2 = parseInt(num2);
  }

  opc = prompt(`Ingrese una opción:
  (s) Suma
  (r) Resta
  (m) Multiplicación
  (d) División`).toLowerCase();

  switch (opc) {
    case "s":
      alert(`La suma es: ${suma(num1, num2)}`);
      break;
    case "r":
      alert(`La resta es: ${resta(num1, num2)}`);
      break;
    case "m":
      alert(`La multiplicación es: ${multiplicacion(num1, num2)}`);
      break;
    case "d":
      alert(`La división es: ${division(num1, num2)}`);
      break;
    default:
      alert("Ingrese una opción válida.");
      break;
  }
}

function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 > num2 ? num1 - num2 : num2 - num1;
}

function multiplicacion(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 === 0 || num2 === 0 ? "No se puede dividir por 0" : num1 / num2;
}

document.getElementById("btn").onclick = calculadora;
