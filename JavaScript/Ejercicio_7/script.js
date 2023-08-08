let valorLimite;
let sum = 0;
let num;

function superarValorLimite() {
  valorLimite = prompt(`Ingrese un valor límite positivo:`);
  while (
    valorLimite === "" ||
    valorLimite === " " ||
    valorLimite <= 0 ||
    isNaN(valorLimite)
  ) {
    valorLimite = prompt(`Ingrese un valor límite positivo válido:`);
  }

  do {} while (condition);
}

document.getElementById("btn").onclick = superarValorLimite;

/* Escriba un programa en el cual se ingrese
 un valor límite positivo,
  y a continuación solicite números al usuario
   hasta que la suma de los números introducidos 
   supere el límite inicial.

let valorLimite;
let sum = 0;
let num1;
function ejer() {
  do {
    valorLimite = parseInt(prompt("Ingrese un numero limite"));
  } while (valorLimite < 0 || isNaN(valorLimite) || valorLimite === "");

  do {
    do {
      num1 = parseInt(prompt("Ingrese otro numero"));
    } while (num1 < 0 || isNaN(num1) || num1 === "");

    sum += num1;
  } while (sum < valorLimite);

  alert(`Se supero el limite, la suma total de numeros ingresados es ${sum}`);
}
ejer(); */
