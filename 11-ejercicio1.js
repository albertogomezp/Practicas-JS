'use strict'
var num1,num2;
num1=parseInt(prompt("INTRODUCE UN NUMERO",0)); //introduccion 1
while(isNaN(num1))
	{
	num1=parseInt(prompt("INTRODUCE UN NUMERO OTRA VEZ",0)); //introduccion X
	}
num2=parseInt(prompt("INTRODUCE UN NUMERO",0)); //introduccion 2
while(isNaN(num2))
	{
	num2=parseInt(prompt("INTRODUCE UN NUMERO DE NUEVO",0)); //introduccion X
	}
if(num1>=num2){alert("El primer numero es mayor que el segundo");} //primera comp
if(num1<=num2){alert("El primer numero es menor que el segundo");} //segunda comp
if(num1==num2){alert("El primer numero es igual que el segundo");} //tercera comp
