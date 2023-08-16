const parrafo = document.getElementById("parrafo");
const palabras = parrafo.innerHTML.split(" ");

let nuevoParrafo = "";

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length === 8) {
      agregarPalabraConEstilo(palabras, i);
    } else {
      agregarPalabra(palabras, i);
    }
  }

  parrafo.innerHTML = nuevoParrafo;
});

function agregarPalabra(palabras, i) {
  nuevoParrafo += `${palabras[i]} `;
}

function agregarPalabraConEstilo(palabras, i) {
  nuevoParrafo += `<span class="resaltado">${palabras[i]}</span> `;
}
