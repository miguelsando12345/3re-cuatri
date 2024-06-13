function verificarEdad() {
  const nombre = prompt("Por favor, ingresa tu nombre:");
  const edad = prompt("Por favor, ingresa tu edad:");

  const popup = document.getElementById("popup");
  const mensaje = document.getElementById("popupMessage");

  if (edad < 10) {
    mensaje.textContent = `${nombre}, ¡tienes palomitas gratis!`;
  } else {
    mensaje.textContent = `Lo siento ${nombre}, esta promoción es solo para niños menores de 10 años.`;
  }

  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 5000);
}
