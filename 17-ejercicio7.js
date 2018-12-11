'use strict'
//tabla de multiplicar de un numero
var num=parseInt(prompt("INTRODUCE UN NUMERO",0));
document.write("<h3> La tabla del "+num+" es: </h3>")
for(var i=0;i<=10;i++)
{
 document.write(num+"*"+i+" ES "+(num*i)+"<br>");
}
//Todas las tablas de multiplicar

for(var c=1;c<=15;c++)
{	
	document.write("<h3> LA TABLA DEL "+c+" ES: </h3><br>")
	for(var i=0;i<=10;i++)
	{
	 document.write(c+"*"+i+" ES "+(c*i)+"<br>");
	}
	document.write("<br>");
	document.write("<hr>");
	document.write("<br>");
}	