'use strict'
var ant=0;
var i;
var intr=0;
for( i=0;intr>=0;i++)
	{
		intr=parseInt(prompt("INTRODUZCA UN NUMERO",0));
		if(isNaN(intr)){break;}
		else
		{	
		var sum=(ant+intr);
		var media=((ant+intr)/(i+1))
		alert("LA SUMA ES "+sum);
		alert("LA MEDIA ES "+media);
		ant=sum;
		}
	}