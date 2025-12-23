Algoritmo sin_titulo
	Definir numeroFigura Como Cadena
	Definir base, altura, radio,lado Como Real
	
	Escribir "Menu de figuras para calcular su area:"
	Escribir  "1.- Triangulo"
	Escribir  "2.- Circulo"
	Escribir  "3.- Cuadrado"
	Escribir  "4.- Rectangulo"
	Escribir "Ingresa el valor:"
	Leer numeroFigura
	
	
	
	Segun numeroFigura Hacer
		"1":
			Escribir "Ingresar Base:"
			Leer base
		
			Escribir "Ingresar Altura:"
			Leer altura
			calcularAreaTriangulo(base, altura)
		"2": 
			Escribir "Ingresar Radio:"
			Leer radio
			calcularAreaCirculo(radio)
		"3": 
			Escribir "Ingresar Lado:"
			Leer lado
			calcularAreaCuadrado(lado)
		"4": 
			Escribir "Ingresar Base:"
			Leer base
			
			Escribir "Ingresar Altura:"
			Leer altura
			calcularAreaRectangulo(base, altura)		
		De Otro Modo:
			Imprimir "No puedo calcular el area de esa figura :("
	FinSegun
	
	
FinAlgoritmo


Funcion calcularAreaTriangulo(base, altura)
	Definir area Como Real
	area = (base * altura)/2
	Imprimir "El area del triangulo es: " ,area
	
FinFuncion


Funcion calcularAreaCirculo(radio)
	Definir area Como Real
	
	area = PI * ( radio * radio)
	Imprimir "El area del circulo es: " ,area
	
FinFuncion



Funcion calcularAreaRectangulo(base, altura)
	Definir area Como Real
	
	area = base * altura
	Imprimir "El area del rectangulo es: " ,area
	
FinFuncion


Funcion calcularAreaCuadrado(lado)
	Definir area Como Real
	
	area = lado * lado
	Imprimir "El area del cuadrado es: " ,area
	
FinFuncion

	