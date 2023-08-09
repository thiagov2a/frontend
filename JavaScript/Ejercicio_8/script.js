const numeroInput = document.getElementById("numeroInput");
const numeroButton = document.getElementById("numeroButton");
const listaResultados = document.querySelectorAll(".listaResultados");
const alerta = document.getElementById("alerta");

let listaNumeros = [];

numeroButton.addEventListener("click", (event) => {
  event.preventDefault();
  const numero = parseInt(numeroInput.value.trim());
  resetResultados();

  if (isNaN(numero)) {
    mostrarAlerta("El número ingresado no es válido.");
  } else if (numero === 0 && listaNumeros.length === 0) {
    mostrarAlerta("La lista de números está vacía.");
  } else {
    if (numero !== 0) {
      listaNumeros.push(numero);
    }
    if (numero === 0) {
      mostrarResultados();
      listaNumeros = []; // Reiniciar la lista de números
    }
  }
  numeroInput.value = ""; // Limpiar el número del input
});

function resetResultados() {
  listaResultados.forEach((e) => {
    e.textContent = "";
  });
}

function mostrarResultados() {
  listaResultados[0].textContent = `Mínimo: ${Math.min(...listaNumeros)}`;
  listaResultados[1].textContent = `Máximo: ${Math.max(...listaNumeros)}`;
  listaResultados[2].textContent = `Promedio: ${promedio(listaNumeros)}`;
}

function mostrarAlerta(mensaje) {
  alerta.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
  alerta.style.display = "block";
}

function promedio(numeros) {
  const suma = numeros.reduce((total, num) => total + num, 0);
  const promedio = suma / listaNumeros.length;
  return promedio.toFixed(2);
}
