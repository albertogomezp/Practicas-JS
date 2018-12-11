'use strict'
// ARRAYS MULTIDIMENSIONALES: ARRAYS DENTRO DE OTROS
var categorias =['accion','terror','comedia'];
var peliculas =["Vida bella","Verdad duele","Gran Torino","Ice Age"];
peliculas.sort(); //ORDENA
peliculas.reverse(); //ORDEN INVERSO 
console.log(peliculas);

var cine =[categorias,peliculas];
/*
console.log(cine[0][1]);
console.log(cine[1][2]);
*/
while(elemento !="ACABAR")
{
var elemento = prompt("Introduce tu película:");
peliculas.push(elemento);
}
peliculas.pop();  //------------------------> ELIMINA EL ÚLTIMO ELEMENTO
console.log(peliculas);

var peliculas_string = peliculas.join();
console.log(peliculas_string);