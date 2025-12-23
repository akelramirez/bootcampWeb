Algoritmo Convertir
	
	Definir grados Como Real;
	Escribir "Indicar Temperatura:";
	leer grados;
	convertirCelsiusAFahrenheit(grados);
	
FinAlgoritmo

Funcion convertirCelsiusAFahrenheit(grados)
	Definir gradosLocal, resultado Como Real;
	gradosLocal=grados;
	
	resultado = (gradosLocal*9/5) + 32;

	Escribir "Temperatura grados Celsius (ºC): ", gradosLocal," Temperaturan grados Fahrenheit (ºF) es: ", resultado;
FinFuncion