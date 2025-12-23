Algoritmo sin_titulo
	Definir CONTRASENAINGRESADA Como Cadena
	Definir CONTRASENACORRECTA Como Cadena
	
	CONTRASENACORRECTA <- "123"
	
	Escribir "Ingresa una contraseña:"
	Leer CONTRASENAINGRESADA
	
	Repetir
	 Escribir "Contraseña incorrecta, ingresa una contraeña:"
	 Leer CONTRASENAINGRESADA
    Hasta Que CONTRASENAINGRESADA = CONTRASENACORRECTA
	
	Escribir "Contraseña correcta"
	
FinAlgoritmo


