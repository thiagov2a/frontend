document.addEventListener("DOMContentLoaded", function() {
  const limiteInput = document.getElementById("limiteInput");
  const numeroInput = document.getElementById("numeroInput");
  const calcularButton = document.getElementById("calcularButton");
  const resultadoDiv = document.getElementById("resultado");
  const alertaDiv = document.getElementById("alerta");

  calcularButton.addEventListener("click", function(event) {
    event.preventDefault();
    const limite = parseInt(limiteInput.value);
    let suma = 0;
    const numeros = [];

    while (suma <= limite) {
      const numeroStr = numeroInput.value.trim();

      if (numeroStr === "") {
        break;
      }

      const numero = parseFloat(numeroStr);

      if (isNaN(numero)) {
        alertaDiv.innerHTML = `
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            Por favor, ingrese un número válido.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        alertaDiv.style.display = "block";
        continue;
      }

      suma += numero;
      numeros.push(numero);
      numeroInput.value = "";
    }

    if (numeros.length > 0) {
      resultadoDiv.textContent = `La suma de los números introducidos (${numeros.join(", ")}) es ${suma}, que supera el límite inicial.`;
      alertaDiv.style.display = "none";
    }
  });
});
