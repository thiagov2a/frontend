document.addEventListener("DOMContentLoaded", () => {
  const parrafo = document.getElementById("parrafo");
  const palabras = parrafo.textContent.split(/\s+/);

  parrafo.innerHTML = "";

  palabras.forEach((palabra) => {
    if (palabra.replace(/[.,;!?]/g, "").length === 8) {
      agregarPalabraConEstilo(palabra);
    } else {
      agregarPalabra(palabra);
    }
  });
});

function agregarPalabra(palabra) {
  parrafo.innerHTML += palabra + " ";
}

function agregarPalabraConEstilo(palabra) {
  parrafo.innerHTML += `<span class="resaltado">${palabra}</span> `;
}
