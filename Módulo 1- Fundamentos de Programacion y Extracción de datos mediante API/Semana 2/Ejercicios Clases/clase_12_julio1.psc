Algoritmo sin_titulo
	
	
	Definir diaSemana Como Caracter
	diaSemana = "sabado"
	
	Definir esFinSemana Como Logico
	esFinSemana = falso
	
	Si (diaSemana == "sabado" || diaSemana == "domingo")
		esFinSemana = !esFinSemana 
	sino
		esFinSemana = Falso
	FinSi
	
	Imprimir "El dia que escribiste esta dentro del fin de semana:", esFinSemana  
	
	
	
FinAlgoritmo
