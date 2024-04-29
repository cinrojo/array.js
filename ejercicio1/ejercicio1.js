
const edad1 = prompt("Ingrese edad: ");



if (edad1 >= 18) {document.getElementById("resultado").innerText = "mayor de edad"}


else if( edad1<= 1){document.getElementById("resultado").innerText = "ERROR"}
else document.getElementById("resultado").innerText = "menor de edad"

