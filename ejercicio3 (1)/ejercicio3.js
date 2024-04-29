// Solicitar al usuario ingresar tres números
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));


// Determinar el mayor de los tres números
let mayor;


if (num1 > num2) {
    mayor = num1;
} else if (num2 > num1) {
    mayor = num2; document.getElementById("resultado").innerText = `El mayor de los dos números ingresados es: ${mayor}`;
} else document.getElementById("resultado").innerText = " error dos nros igules";


