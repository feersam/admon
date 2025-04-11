// Botón para activar modo oscuro
const modoOscuroBtn = document.getElementById("modoOscuroBtn");
modoOscuroBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Acción al enviar formulario de pedido
const form = document.getElementById("formOrden");
const mensaje = document.getElementById("mensajePedido");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = form.elements[0].value;
  const cantidad = form.elements[1].value;
  mensaje.textContent = `¡Gracias ${nombre}! Tu pedido de ${cantidad} combo(s) está en camino.`;
  form.reset();
});

// Botón de la sección hero para ordenar (extra)
function ordenarAhora() {
  document.getElementById("ordenar").scrollIntoView({ behavior: "smooth" });
}
