Algoritmo Calificaciones
	Definir arrayCalificaciones, i, calificacion, alumno, calificacionNueva  Como Entero;
	Definir promedio, nuevoPromedio Como Real;
	Dimension arrayCalificaciones[5];
	
	Para i<-0 hasta 4 Con Paso 1 Hacer
		Escribir "Indicar la calificación de Alumno: ",i;
		leer calificacion;
		arrayCalificaciones[i] = calificacion;
	FinPara
	
	Para i<-0 hasta 4 Con Paso 1 Hacer
		Escribir "La calificación del alumno: " ,i, " es: ", arrayCalificaciones[i];
	FinPara
	
	promedio = (arrayCalificaciones[0]+arrayCalificaciones[1]+arrayCalificaciones[2]+arrayCalificaciones[3]+arrayCalificaciones[4])/5;
	Escribir "El Promedio de las calificaciones es: ", promedio;
	
	Escribir "Indicar el vúmero del alumno a modificar, inidcar del 0 al 4: ";
	leer alumno;
	
	Escribir "Indicar la nueva calificacion del alumno: ", alumno;
	leer calificacionNueva;
	
	arrayCalificaciones[alumno] = calificacionNueva;
	
	Escribir "Lista modificada de calificaciones: ";
	
	Para i<-0 hasta 4 Con Paso 1 Hacer
		Escribir "La calificacion del alumno: " ,i, " es: ", arrayCalificaciones[i];
	FinPara
	
	nuevoPromedio = (arrayCalificaciones[0]+arrayCalificaciones[1]+arrayCalificaciones[2]+arrayCalificaciones[3]+arrayCalificaciones[4])/5;
	Escribir "El nuevo promedio de calificaciones es: ", nuevoPromedio;
	
FinAlgoritmo
