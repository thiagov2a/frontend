var estadoDelDia;
var mensaje;

function mostrarEstadoDelDia() {
  estadoDelDia = prompt("¿Cómo está el día de hoy?");

  if (estadoDelDia !== null && estadoDelDia.trim() !== "") {
    mensaje = "El día de hoy está " + estadoDelDia + ".";
    alert(mensaje);
  } else {
    alert("Por favor, ingrese un estado válido del día.");
  }
}

document.getElementById("btn").onclick = mostrarEstadoDelDia;
