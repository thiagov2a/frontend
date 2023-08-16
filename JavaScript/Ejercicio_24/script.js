const numInput = document.getElementById("numInput");
const numButton = document.getElementById("numButton");
const alerta = document.getElementById("alerta");
const resultado = document.getElementById("resultado");

numButton.addEventListener("click", (event) => {
  event.preventDefault();
  const num = numInput.value;
  resetResultado();
  resetAlerta();

  if (isNaN(num) || num === "") {
    mostrarAlerta("El número ingresado no es válido.");
  } else {
    mostrarResultado(num);
  }

  numInput.value = "";
});

function resetResultado() {
  resultado.textContent = "";
}

function mostrarResultado(num) {
  resultado.textContent = `El resultado es: ${num / 2}`;
}

function resetAlerta() {
  alerta.innerHTML = `<div id="alerta"></div>`;
}

function mostrarAlerta(mensaje) {
  alerta.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
  alerta.style.display = "block";
}
