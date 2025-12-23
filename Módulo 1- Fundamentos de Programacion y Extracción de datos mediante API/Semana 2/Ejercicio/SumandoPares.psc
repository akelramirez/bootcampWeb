Algoritmo SumandoPares
	
	Definir limite Como Entero;
	Escribir "Indique limite superior deseado";
	leer limite;
	sumaPares(limite);
	
FinAlgoritmo

Funcion sumaPares(limite)
	Definir i, Suma Como Entero;
	Suma=0;
	
	Para i<-1 hasta limite Con Paso 1 Hacer
		Si i%2 == 0 entonces
			suma = suma + i;
		FinSi
	FinPara
	Escribir "La Suma Final de los pares Es=", Suma;
FinFuncion