Algoritmo sin_titulo
	Definir opcionMenu Como Cadena
	Escribir 'Menu de opciones:'
	Escribir '1. Saludar'
	Escribir '2. Mostrar Fecha.'
	Escribir '3. Salir'
	Escribir 'Selecciona una opcion en un rango de (1-3):'
	Leer opcionMenu
	
		Según opcionMenu Hacer
		"1":
			Escribir 'Hola! , :)'
		"2":
			Escribir 'Hoy es sabado 17 de julio del 2025'
		"3":
			Escribir 'Adios!!! :)'
		De Otro Modo:
			Escribir 'La opción que ingresaste es incorrecta :('
		FinSegún
		
	
FinAlgoritmo
