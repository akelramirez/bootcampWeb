# Ejercicio 1: Leer dos valores diferentes e identificar el mayor

def comparar_valores():
    try:
        # 1. Leer dos valores diferentes
        # Usamos input() para leer la entrada y int() para convertirla a número
        valor1 = int(input("Introduce el primer valor: "))
        valor2 = int(input("Introduce el segundo valor (debe ser diferente al primero): "))

        # 2. Validar que los valores sean diferentes
        if valor1 == valor2:
            print("Error: Los valores deben ser diferentes.")
            return

        # 3. Identificar cuál de los dos valores es el mayor y mostrarlo
        if valor1 > valor2:
            print(f"El valor mayor es: {valor1}")
        else: # Si no son iguales y valor1 no es mayor que valor2, entonces valor2 debe ser el mayor
            print(f"El valor mayor es: {valor2}")

    except ValueError:
        print("Error: Por favor, introduce solo números enteros válidos.")

# Ejecutar la función
comparar_valores()