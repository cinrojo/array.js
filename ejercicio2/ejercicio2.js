const num1 = parseFloat(prompt("Ingrese el primer número:"));


if (num1 >0){document.getElementById("resultado").innerText = `El nro ingresado Es positivo!`;}
else if (num1 === 0) {document.getElementById("resultado").innerText = `El nro ingresado Es zero!`;}
else {document.getElementById("resultado").innerText = `El nro ingresado  Es negativo!`;}