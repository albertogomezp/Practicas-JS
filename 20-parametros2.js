'user strict'
//parametros REST y SPREAD
function listadoFrutas(fru1,fru2, ...rest) //parametro REST ---> ...blabla
{
	console.log("FRUTA 1: ",fru1)
	console.log("FRUTA 2: ",fru2)
	console.log("REST: ",rest)
}
listadoFrutas("naranja","manzana","melon","coco","fruta");
var frutas=["naranja","manzana"];

listadoFrutas(...frutas,"melon","coco","fruta"); //esto es lo mismo que el REST