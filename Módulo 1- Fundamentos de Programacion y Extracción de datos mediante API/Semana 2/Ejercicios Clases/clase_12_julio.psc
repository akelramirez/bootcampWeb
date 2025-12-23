Algoritmo sin_titulo
	
	Definir tipoSolicitudIngresada Como Caracter;
	
	Escribir "Ingresa el tipo de solicitud";
	Leer tipoSolicitudIngresada;
	
	Definir nivelSolicitudUrgente Como Caracter;
	nivelSolicitudUrgente = "urgente";
	
	Definir nivelSolicitudMedia Como Caracter;
	nivelSolicitudMedia = "media";
	
	Definir nivelSolicitudBaja Como Caracter;
	nivelSolicitudBaja = "baja";
	
		Si (tipoSolicitudIngresada == nivelSolicitudUrgente)
			Imprimir ("Tu solicitud será atendida en maximo 1 dia habil");
		sino 
			Si (tipoSolicitudIngresada <> nivelSolicitudBaja & tipoSolicitudIngresada <> nivelSolicitudMedia)
				Imprimir ("Tu tipo de solicitud es incorrecta");
			SiNo
				Imprimir ("Tu solicitud será atendida en maximo 3 dias habiles");
		FinSi
		
	FinSi

FinAlgoritmo