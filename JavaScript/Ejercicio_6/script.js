var valor;

function verificarParImpar() {
  valor = prompt("Ingresa un número para verificar si es par o impar:");
  valor = parseInt(valor);

  if (valor === 0) {
    alert(`El número ${valor} no es par ni impar.`);
  } else if (valor % 2 === 0) {
    alert(`El número ${valor} es par.`);
  } else {
    alert(`El número ${valor} es impar.`);
  }
}

document.getElementById("btn").onclick = verificarParImpar;
