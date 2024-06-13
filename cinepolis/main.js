document.addEventListener("DOMContentLoaded", () => {
  const promoForm = document.getElementById("promo-form");

  if (promoForm) {
    promoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;

      if (age < 10) {
        alert(
          `¡Hola ${name}! Tienes palomitas gratis porque eres menor de 10 años.`
        );
      } else {
        alert(
          `Lo siento ${name}, la promoción es solo para niños menores de 10 años.`
        );
      }
    });
  }
});
