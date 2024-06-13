function checkAge() {
  const name = prompt("Introduce tu nombre:");
  const age = prompt("Introduce tu edad:");

  if (age < 10) {
    alert(
      `¡Hola ${name}! Como eres menor de 10 años, tienes unas palomitas gratis.`
    );
  } else {
    alert(
      `Lo siento ${name}, esta promoción es solo para niños menores de 10 años.`
    );
  }
}
