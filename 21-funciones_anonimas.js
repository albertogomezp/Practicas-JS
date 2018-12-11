'user strict'
//funciones anonimas: funcion sin nombre
//callback es una funcion que se ejecuta dentro de otra

function sumame(num1,num2,sumaymuestra,sumapordos) //Los 3ºy4º parametros pasan a otra funcion
{
	var sumar=(num1+num2);          //funcion suma
	sumaymuestra(sumar); 			//invoca
	sumapordos(sumar);				//invoca
	return sumar;					
}


sumame(5,7,function(dato){                 //DA DATOS
	console.log("la suma es",dato);
},
function(dato){
	console.log("la suma por dos es: ",(dato*2));
});
/* FUNCIONES DE FLECHA, sustituye function por =>

sumame(5,7,dato =>{                 //DA DATOS
	console.log("la suma es",dato);
},
dato =>{
	console.log("la suma por dos es: ",(dato*2));
});

*/