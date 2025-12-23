# Ejercicio 2: Calcular la suma de los números enteros del 1 al 10

# Solución 1: Usando un bucle 'for' para iteración explícita
def sumar_con_bucle():
    suma_total = 0
    # range(1, 11) genera los números enteros 1, 2, 3, ..., 10
    for numero in range(1, 11):
        suma_total += numero
    return suma_total

# Solución 2: Usando la función incorporada 'sum()' y 'range()' (la forma más "pythónica")
def sumar_con_sum_range():
    # sum() recibe una secuencia y suma sus elementos.
    # range(1, 11) proporciona la secuencia.
    return sum(range(1, 11))


print("La suma de los números del 1 al 10 es:")
print(f"Resultado (con bucle for): {sumar_con_bucle()}")
print(f"Resultado (con sum() y range()): {sumar_con_sum_range()}")

# El resultado esperado en ambos casos es 55.