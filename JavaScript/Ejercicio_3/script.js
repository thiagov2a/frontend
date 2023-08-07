var edad;

function esMayorDeEdad() {
  edad = prompt("Ingrese su edad:");

  if (edad !== null && edad.trim() !== "") {
    if (edad >= 18) {
      alert("Usted es mayor de edad.");
    } else {
      alert("Usted no es mayor de edad.");
    }
  } else {
    alert("Por favor, ingrese un número válido.");
  }
}

document.getElementById("btn").onclick = esMayorDeEdad;
