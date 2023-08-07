var respuesta;

function validarRespuesta() {
  respuesta = prompt("Ingrese 'S' o 'N':");

  if (respuesta === "S" || respuesta === "N") {
    alert("CORRECTO");
  } else {
    alert("INCORRECTO");
  }
}

document.getElementById("btn").onclick = validarRespuesta;
