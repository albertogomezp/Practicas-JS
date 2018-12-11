'use strict'
var texto = "HOLA MUNDO SOY UNA VARIABLE GLOBAL";
function holamundo(texto){
	var hola_mundo ="Texto dentro de funcion"; //puedo acceder a ella desde dentro
	console.log(texto);
	console.log(numero.toString()); // EL .toString() lo pasa a string 
	console.log(hola_mundo);
}
var numero = 12;
holamundo(texto);
