# Diferencias de Implementación - Ejercicio 2 (Python vs. Lenguajes Anteriores)

Este documento explica las diferencias al implementar la suma de un rango de números (1 al 10) usando Python, comparado con lenguajes aprendidos previamente (como JavaScript).

## 1. Estructuras de Repetición (Bucles)

* **Python:** El bucle `for` es un **"for-each"** que itera sobre secuencias (como listas o rangos). Se usa la función **`range(inicio, fin + 1)`** para generar la secuencia de números enteros a iterar: `for num in range(1, 11):`
* **Lenguajes Basados en C (Ej. JavaScript):** El bucle `for` tradicional se usa para un control más explícito del índice, la condición y el incremento: `for (let i = 1; i <= 10; i++)`.

**Diferencia Clave:** Python promueve la **iteración directa sobre secuencias**, haciendo el código más legible y evitando la manipulación manual de índices, lo cual es obligatorio en el `for` tradicional.

## 2. Solución "Pythónica" (Idiomática)

* **Python:** Posee la función incorporada **`sum()`** que puede sumar automáticamente cualquier secuencia de números generada por `range()` o almacenada en una lista. Esto permite resolver la tarea en una sola línea de código: `sum(range(1, 11))`.
* **Lenguajes Anteriores:** La suma de un rango generalmente requiere la implementación explícita de un bucle `for` o, si se trabaja con estructuras de datos complejas (como Arrays en JavaScript), el uso de métodos de alto orden como `reduce()`.

**Diferencia Clave:** Las funciones incorporadas de Python ofrecen soluciones **extremadamente concisas y legibles** para tareas comunes (como la suma), reduciendo la necesidad de escribir lógica de bucle manual.