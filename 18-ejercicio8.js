'use strict'
//CALCULADORA 
var num1=parseInt(prompt("INTRODUCE UN NUMERO",0));
var num2=parseInt(prompt("INTRODUCE OTRO NUMERO",0));
while(isNaN(num1)) //SI METEMOS OTRA COSA QUE NO SEA UN NUMERO
{
var num1=parseInt(prompt("INTRODUCE UN NUMERO BIEN",0));	
}
while(isNaN(num2)) //IDEM
{
var num2=parseInt(prompt("INTRODUCE UN NUMERO BIEN",0));	
}
var sum=(num1+num2);
var resta=(num1-num2);
var multi=(num1*num2);
var div=(num1/num2);
document.write("<h3>LA SUMA DE "+num1+" Y "+num2+" ES: "+sum+"</h3><br>");
console.log("LA SUMA ES "+sum);
alert("LA SUMA ES "+sum);
document.write("<h3>LA RESTA DE "+num1+" Y "+num2+" ES: "+resta+"</h3><br>");
console.log("LA RESTA ES "+resta);
alert("LA RESTA ES "+resta);
document.write("<h3>LA MULTIPLICACION DE "+num1+" Y "+num2+" ES: "+multi+"</h3><br>");
console.log("LA MULTIPLICACION ES "+multi);
alert("LA MULTIPLICACION ES "+multi);
document.write("<h3>LA DIVISION DE "+num1+" Y "+num2+" ES: "+div+"</h3><br>");
console.log("LA DIVISION ES "+div);
alert("LA DIVISION ES "+div);

