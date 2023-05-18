let primerNumero = parseFloat(
  prompt("Este es un simulador de una Calculadora:\nIngrese su Primer Número")
);
let calculadora = prompt(
  "Ingrese la función que desea realizar: \n + \n - \n * \n / \n\nEscriba ESC para salir"
);
let segundoNumero = parseFloat(prompt("Ingrese su Segundo Número"));

while (calculadora != "ESC") {
  switch (calculadora) {
    case "+":
      resultado = (primerNumero + segundoNumero).toFixed(2);
      alert(primerNumero + " + " + segundoNumero + " = " + resultado);
      break;
    case "-":
      resultado = (primerNumero - segundoNumero).toFixed(2);
      alert(primerNumero + " - " + segundoNumero + " = " + resultado);
      break;
    case "*":
      resultado = (primerNumero * segundoNumero).toFixed(2);
      alert(primerNumero + " x " + segundoNumero + " = " + resultado);
      break;
    case "/":
      resultado = (primerNumero % segundoNumero).toFixed(2);
      alert(primerNumero + " / " + segundoNumero + " = " + resultado);
      break;

    default:
      alert(prompt("No ha ingresado una función válida"));
      break;
  }

  primerNumero = parseFloat(
    prompt("Este es un simulador de una Calculadora:\nIngrese su Primer Número")
  );
  calculadora = prompt(
    "Ingrese la función que desea realizar: \n + \n - \n * \n / \n\nEscriba ESC para salir"
  );
  segundoNumero = parseFloat(prompt("Ingrese su Segundo Número"));

  if (calculadora == "ESC") {
    alert("Decidiste cerrar la calculadora");
  }
}
