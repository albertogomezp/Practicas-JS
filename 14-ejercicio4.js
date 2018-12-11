'use strict'
/*
hacer un programa que muestre todos los numeros impares que existen entre dos numeros introducidos
*/
var num1,num2,may,men,cont;
num1=parseInt(prompt("INTRODUCE UN NUMERO",0));
num2=parseInt(prompt("INTRODUCE UN NUMERO",0));
if(num1>num2)
{
may=num1; 
men=num2;
}
if(num1<num2)
{
may=num2; 
men=num1;
}
document.write("<h2>del numero "+men+" al "+may+" están estos numeros impares: </h2>");

for( var i=men+1;i<may;i=i+2)
	{
	if(i%2!=0)
	{	
	document.write(i+" ES IMPAR <br>");	
	}
	}	

