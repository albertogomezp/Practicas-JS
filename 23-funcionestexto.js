'use strict'

//transformaciones de texto
var numero = 444;
var texto2 = "Buenos dias";
/*
var dato = numero.toString();
	dato = texto1.toUpperCase(); //to.LowerCase();
console.log(dato,"     es una cosa llamada: ",typeof dato);

//Calcular longitud de una String
var nombre ="Alberto Gómez";
	nombre =["hola","holis"]; //El length siempre cuenta longitudes de cosas que tenemos
console.log(nombre.length);

//Concatenar cadenas
var textototal =texto1.concat(texto2);
console.log(textototal );
*/
var busqueda =texto1.indexOf("curso"); //ESTAS COSAS SIRVEN PARA HACER BUSQUEDAS EN TEXTOS
console.log(busqueda); //DA -1 SI NO HA ENCONTRADO NADA, BRUUUUUH
var busqueda2 =texto1.lastIndexOf("de");
console.log(busqueda2);
var busqueda3 =texto1.search("curso");
console.log(busqueda3);
var busqueda4 =texto1.match("de"); //(/curso/gi);
console.log(busqueda4);
var busqueda5 =texto1.substr(14,5); //(comienzo,longitud)
console.log(busqueda5);
var busqueda6 =texto1.startsWith("Bienvenido"); //endsWith, includes,...
console.log(busqueda6);
var busqueda7 =texto1.replace("JavaScript","hacer papel") //slice corta hasta el numero que le damos, o de un numero a otro
console.log(busqueda7);
var busqueda8 =texto1.split(" ");
console.log(busqueda8);
var busqueda9 =texto1.trim(); //QUITA ESPACIOS POR DELANTE Y POR DETRAS, VERI USEFUL
console.log(busqueda9);

