'user strict'
var edad=18;
var print="";
switch(edad){
	case 18:
		print="acabas de cumplir la mayoria de edad";
	break;
	case 25:
		print="Eres un adulto";
	break;
	case 40:
		print="Crisis de los 40";
	break;
	case 75:
		print="Eres ya anciano";
	break;
	default:
		print="Tu edad es neutra";
	break;		
	}
console.log(print);