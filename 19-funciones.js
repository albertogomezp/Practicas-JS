'use strict'
//funciones. vamos a invocarlas cuando están encapsuladas

function porConsola(num1,num2)
{
	console.log("SUMA "+(num1+num2));
	console.log("RESTA "+(num1-num2));
	console.log("MULTIPLICACION "+(num1*num2));
	console.log("DIVISION "+(num1/num2));	
	console.log("**************************");	
}
function porPantalla(num1,num2)
{
	document.write("SUMA "+(num1+num2)+"<br>");
	document.write("RESTA "+(num1-num2)+"<br>");
	document.write("MULTIPLICACION "+(num1*num2)+"<br>");
	document.write("DIVISION "+(num1/num2)+"<br>");	
	document.write("**************************"+"<br>");	
}
 
function calculadora(num1,num2, mostrar=true) //esto es la capsula
{
	//las acciones que irá realizando
	if(mostrar==false)
	{	
	porConsola(num1,num2);
	}
	else
	{
	porPantalla(num1,num2);	
	}	
}


calculadora(1,2);

/*
for(var i=1;i<=100;i++)
	{
	console.log(i);
	calculadora(i,8);	//invocacion
	}
*/