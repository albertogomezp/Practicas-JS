'use strict'



// SELECCIONAR COSAS EN EL HTML
//DOM (doc obj mode) a ver si a la segunda me entero...XD
//Si el DOM da NULL es bc hay que cargar el script al final del body

function cambiacolor(color){
	caja.style.background = color;
} //nos permite invocar una funcion dsd consola para editar elementos para usuario


var caja = document.getElementById("micaja") //esto buscara la caja y lo mete en var caja
var caja2 = document.getElementById("micaja").innerHTML; //esto me saca el texto que hay dentro, usefull
console.log(caja); //para revisar
caja.innerHTML = "Texto en la caja desde HTML"; //nos permite cambiar el contenido, en este caso de caja
caja.style.background= "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "Hola"; //añade atributos
console.log("inner HTML: "+caja2); 

/*
sin nada= class
# elemento o ID
. class
*/
//QUERY SELECTOR
var caja3 = document.querySelector("#micaja"); //Igual que el getElementByID


//CONSEGUIR ELEMENTOS POR SU ETIQUETA

var divs = document.getElementsByTagName('div');
//var contenido = divs[2];
//contenido.innerHTML = "otro valor, rakarra";
contenido.style.background = "green";
divs.forEach((valor, indice) => {
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(valor);
	parrafo.appendChild(texto);
});
console.log(divs);
console.log (contenido);
//CONSEGUIR ELEMENTO POR SU CLASE CSS