'use strict'
/*
Un programa que:
1.- Pida 6 numeros por pantalla y los meta en un array
2.- Tiene que mostrar el array entero (todos los elementos) en el cuerpo de la página y consola
3.- Ordenarlo y mostrarlo
4.- Invertir su orden y mostrarlo
5.- Mostrar cuantos elementos tiene
6.- Búsqueda de un valor introducido por el usuario, que diga si está en el array y su posición.
************************************************************************************************/
// PARTE 1 --------------------------------------------------------
var nums =[0,0,0,0,0,0];
alert("INTRODUCE 6 NUMEROS");
for (var i=0; i<6; i++)
	{
		nums[i] = prompt();
	}
// PARTE 2 --------------------------------------------------------	
console.log(nums);
document.write("<h1>Los numeros introducidos son:</h1><br>");
document.write("<ul>");
 for(i =0;i<=nums.length-1;i++)
	 {
	 	document.write("<li>"+nums[i]+"<br>");
	 }
// PARTE 3 --------------------------------------------------------
nums.sort();
console.log(nums);	 
document.write("<h1>Los numeros introducidos ordenados son:</h1><br>");
document.write("<ul>");
 for(i =0;i<=nums.length-1;i++)
	 {
	 	document.write("<li>"+nums[i]+"<br>");
	 }
// PARTE 4 --------------------------------------------------------	 
nums.reverse();
console.log(nums);	 
document.write("<h1>Los numeros introducidos ordenados al revés son:</h1><br>");
document.write("<ul>");
 for(i =0;i<=nums.length-1;i++)
	 {
	 	document.write("<li>"+nums[i]+"<br>");
	 }
// PARTE 5 --------------------------------------------------------	 	 
alert("EL ARRAY TIENE "+nums.length+" ELEMENTOS ");
alert("INTRODUCE UN NÚMERO A BUSCAR");
var intr =prompt("Introduce un número a buscar: ");
var busqueda = nums.some(num => num == intr);  //BUSQUEDA EN ARRAYS SI HAY TAl
if(busqueda==true)
{
	console.log("EL NUMERO INTRODUCIDO ESTÁ EN EL ARRAY Y SU POSICIÓN ES: "+nums.lastIndexOf(intr));
}
else
{
	console.log("EL NUMERO INTRODUCIDO NO ESTÁ EN EL ARRAY");
}