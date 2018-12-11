'use strict'
//PLANTILLAS DE TEXTO EN UN ARRAY
var nombre = prompt("INTRODUCE TU NOMBRE");
var apellidos = prompt("INTRODUCE TUS APELLIDOS");
// var texto = "Mi nombre es: "+nombre+" y mis apellidos son: "+apellidos+"<br>";
var texto = `
	<h1>¿Hola que tal?</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mis apellidos son: ${apellidos}</h3>  
`; //${} esto INTERPOLA cosas 
document.write(texto);