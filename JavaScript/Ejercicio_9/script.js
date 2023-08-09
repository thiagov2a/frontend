const fraseInput = document.getElementById("fraseInput");
const fraseButton = document.getElementById("fraseButton");
const resultado = document.getElementById("resultado");
const alerta = document.getElementById("alerta");

fraseButton.addEventListener("click", (event) => {
  event.preventDefault();
  let frase = fraseInput.value;
  resetResultado();

  if (frase === "") {
    mostrarAlerta("No se ingreso una frase.");
  } else {
    mostrarResultados(frase);
  }

  fraseInput.value = "";
});

function resetResultado() {
  resultado.textContent = "";
}

function mostrarResultados(frase) {
  resultado.textContent = `${fraseEspaciada(frase)}`;
}

function mostrarAlerta(mensaje) {
  alerta.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
  alerta.style.display = "block";
}

function fraseEspaciada(frase) {
  let fraseConEspacios = "";
  for (let i = 0; i < frase.length; i++) {
    if (i === frase.length - 1) {
      fraseConEspacios += `${frase.substring(i, i + 1)}`;
    } else {
      fraseConEspacios += `${frase.substring(i, i + 1)} `;
    }
  }
  return fraseConEspacios;
}
