Algoritmo sin_titulo
	
	Definir  limite Como Entero
	Definir cantidad Como Real
	Definir contador Como Entero
	
	limite = 7
	
	Para contador = 1 Hasta limite con paso 1 Hacer 
		cantidad = 0
		
		Escribir "Ingresa una cantidad"
		Leer cantidad
		
		calcularIVA(cantidad)
	FinPara
	
FinAlgoritmo


Funcion calcularIVA(cantidad)
	Definir iva Como Real
	Definir porcentaje Como Real
	
	iva = 0
	porcentaje = .16
	
	iva = cantidad * porcentaje
	
	Imprimir "El iva de " ,cantidad ," es de: ", iva
FinFuncion
