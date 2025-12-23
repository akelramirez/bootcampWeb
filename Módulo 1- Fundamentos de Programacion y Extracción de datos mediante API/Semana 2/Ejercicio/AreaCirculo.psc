Algoritmo AreaCirculoPrincipal
	
	Definir radio Como Real;
	Escribir "Indicar valor de radio a calcular:";
	leer radio;
	areaCirculo(radio);
	
FinAlgoritmo

Funcion areaCirculo(radio)
	Definir radioLocal, area Como Real;
	radioLocal = radio;
	area=0;
	
	area = PI*(radio*radio);
	
	Escribir "Con el radio indicado: ", radio," El área del ciculo es= ", area;
FinFuncion