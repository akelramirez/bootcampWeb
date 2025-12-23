# Inicializar el diccionario para almacenar estudiantes (nombre: calificación)
estudiantes = {}

def mostrar_menu():
    """Muestra el menú de opciones al usuario."""
    print("\n--- Sistema de Gestión de Estudiantes ---")
    print("1. Agregar un nuevo estudiante") #cite: 28
    print("2. Mostrar lista de estudiantes") #cite: 28
    print("3. Buscar un estudiante") #cite: 29
    print("4. Eliminar un estudiante") #cite: 29
    print("5. Salir") #cite: 52
    print("---------------------------------------")

def agregar_estudiante():
    """Agrega un nuevo estudiante y su calificación al diccionario."""
    nombre = input("Ingrese el nombre del estudiante: ").strip().title() #cite: 38
    
    # Validar la calificación
    while True:
        try:
            calificacion = float(input(f"Ingrese la calificación de {nombre}: ")) #cite: 39
            if 0 <= calificacion <= 100: # Asumiendo una escala de 0 a 100
                break
            else:
                print("La calificación debe estar entre 0 y 100.")
        except ValueError:
            print("Entrada no válida. Ingrese un número para la calificación.")

    estudiantes[nombre] = calificacion
    print("Estudiante agregado exitosamente.") #cite: 40

def mostrar_estudiantes():
    """Muestra la lista de estudiantes y sus calificaciones."""
    if estudiantes:
        print("\n--- Lista de Estudiantes ---") #cite: 44
        # Iterar sobre las claves (nombres) y valores (calificaciones)
        for nombre, calificacion in estudiantes.items():
            print(f"{nombre}: {calificacion}") #cite: 45, 46
    else:
        print("La lista de estudiantes está vacía.")

def buscar_estudiante():
    """Busca un estudiante por nombre y muestra su calificación."""
    nombre = input("Ingrese el nombre del estudiante a buscar: ").strip().title() #cite: 48
    
    if nombre in estudiantes:
        calificacion = estudiantes[nombre]
        print(f"{nombre} tiene una calificación de {calificacion}.") #cite: 49
    else:
        print(f"El estudiante '{nombre}' no se encontró en la lista.")

def eliminar_estudiante():
    """Elimina a un estudiante de la lista por su nombre."""
    nombre = input("Ingrese el nombre del estudiante a eliminar: ").strip().title()
    
    if nombre in estudiantes:
        del estudiantes[nombre]
        print(f"Estudiante {nombre} eliminado exitosamente.")
    else:
        print(f"El estudiante '{nombre}' no se encontró en la lista.")

# Bucle principal del programa
def ejecutar_programa():
    while True:
        mostrar_menu()
        
        # Obtener la selección del usuario
        seleccion = input("Selecciona una opción: ").strip() #cite: 52
        
        if seleccion == '1':
            agregar_estudiante()
        elif seleccion == '2':
            mostrar_estudiantes()
        elif seleccion == '3':
            buscar_estudiante()
        elif seleccion == '4':
            eliminar_estudiante()
        elif seleccion == '5':
            print("¡Hasta luego!") #cite: 53
            break
        else:
            print("Opción no válida. Por favor, selecciona un número del 1 al 5.")

# Ejecutar la función principal
if __name__ == "__main__":
    ejecutar_programa()