'use strict'
//arrays, arreglos, matrices, etc...
var nombre ="Alberto Gómez";
var nombres= ["Alberto Gómez",52, true];
var lenguajes = new Array("PHP","JS","GO","JAVA","SQL","C#","Pascal");
//los indices en la informática empiezan en 0, ojo (recordemos de programacion y computación)
console.log(nombres[2]);
console.log(lenguajes.length);

/*******************************************************************
var elemento = parseInt(prompt("¿Qué elemento del array quieres?",0));
if(elemento<=nombres.length)
 {
 	alert(nombres[elemento]);
 }
 document.write("<h1>Los lenguajes de programación del 2018 son:</h1><br>");
 document.write("<ul>");
 /*
 for(var i =0;i<=lenguajes.length-1;i++)
 {
  	document.write("<li>"+lenguajes[i]+"<br>");
 } 	
*/
lenguajes.forEach((elemento,index,data)=>{               
	console.log(data);
	document.write("<li>"+index+"-"+elemento+"</li>");
});

document.write("</ul>");

//Busquedas
var precios =[10,20,30,40,50,60];
var busqueda = precios.some(precio => precio >= 120);  //BUSQUEDA EN ARRAYS SI HAY TAl
console.log(busqueda);
var busqueda = lenguajes.findIndex(lenguaje => lenguaje =="PHP");  //BUSQUEDA EN ARRAYS

console.log(busqueda)