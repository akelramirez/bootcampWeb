def manipular_lista_ejemplo():
    # 1. Solicitar la lista de números enteros.
    while True:
        try:
            # Ejemplo de entrada según la imagen: 10, 20, 30, 40, 50 [cite: 19]
            entrada = input("Ingrese una lista de números enteros separados por comas: ")
            
            # 1.1. Preprocesamiento: Dividir, limpiar espacios y convertir a enteros.
            lista_str = [x.strip() for x in entrada.split(',')]
            lista_numeros = [int(x) for x in lista_str]
            break
        except ValueError:
            print("Error: Asegúrate de ingresar solo números enteros separados por comas. Inténtalo de nuevo.")
        except Exception:
             print("Error en la entrada. Inténtalo de nuevo.")

    print("-" * 30)

    # --- Requerimiento 1: Mostrar la longitud de la lista ingresada. --- [cite: 11]
    longitud = len(lista_numeros)
    # Ejemplo de salida: Longitud de la lista: 5 [cite: 20]
    print(f"Longitud de la lista: {longitud}")

    # --- Requerimiento 2: Calcular y mostrar la suma de todos los números. --- [cite: 12]
    suma = sum(lista_numeros)
    # Ejemplo de salida: Suma de todos los números en la lista: 150 [cite: 21]
    print(f"Suma de todos los números en la lista: {suma}")

    print("-" * 30)

    # --- Requerimiento 3: Verificar si un número específico está presente y mostrar su índice. --- [cite: 13, 14]
    while True:
        try:
            # Solicitar el número a verificar. Ejemplo de entrada: 30 [cite: 22]
            numero_a_verificar = int(input("Ingrese un número para verificar su presencia en la lista: "))
            
            if numero_a_verificar in lista_numeros:
                # Si está presente, encontrar y mostrar su índice.
                indice = lista_numeros.index(numero_a_verificar)
                # Ejemplo de salida: El número 30 está presente en la posición 2 de la lista. [cite: 23]
                print(f"El número {numero_a_verificar} está presente en la posición {indice} de la lista.")
            else:
                print(f"El número {numero_a_verificar} NO está presente en la lista.")
            break
        except ValueError:
            print("Error: Ingresa un número entero válido para la verificación.")

    print("-" * 30)

    # --- Requerimiento 4: Eliminar el último elemento de la lista y mostrar la lista actualizada. --- [cite: 14]
    if lista_numeros:
        # El método .pop() sin argumento elimina el último elemento.
        lista_numeros.pop()
        # Ejemplo de salida: Lista actualizada después de eliminar el último elemento: [10, 20, 30, 40] [cite: 24]
        print(f"Lista actualizada después de eliminar el último elemento: {lista_numeros}")
    else:
        print("La lista está vacía, no se puede eliminar el último elemento.")


if __name__ == "__main__":
    manipular_lista_ejemplo()