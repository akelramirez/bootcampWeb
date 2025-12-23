Algoritmo sumandoPares
	
	Definir limite Como Entero;
	Escribir "Arrana el limite superior pero ya";
	leer limite;
	sumaPares(limite);
	

FinAlgoritmo

Funcion sumaPares(limite)
	Definir i, Suma Como Entero;
	Suma=0;
	
	Para i<-1 hasta limite Con Paso 1 Hacer
		si i%2 == 0 entonces
			Escribir i," si es par";
			suma = suma + i;
		SiNo
			Escribir i," no es par";
		FinSi
	FinPara
	Escribir "La Suma Final de los pares Es=", Suma;
FinFuncion