# Diferencias de Implementación - Ejercicio 1 (Python vs. Lenguajes Anteriores)

Este documento explica brevemente las diferencias al implementar la lectura, comparación, y muestra del mayor de dos números usando Python, comparado con lenguajes como JavaScript (u otros típicos de un bootcamp de desarrollo web).

## 1. Entrada de Datos (Lectura)

| Característica | Python | JavaScript (Ejemplo de Navegador) |
| :--- | :--- | :--- |
| **Lectura de Input** | Usa `input()` de forma sencilla en la consola para obtener una cadena de texto. | Típicamente usa `prompt()` (navegador) o librerías específicas (Node.js). |
| **Conversión de Tipo**| Requiere un *casting* explícito como `int()` para convertir la cadena de texto de `input()` a un número entero. | Las funciones como `prompt()` devuelven cadenas y requieren `parseInt()` o `Number()` para la conversión numérica. |

**Diferencia Clave:** En Python, la lectura es muy **concisa** (`int(input(...))`). En otros lenguajes como JavaScript, la lectura de la entrada del usuario puede requerir una implementación diferente dependiendo del entorno (navegador vs. Node.js).

## 2. Comparación Lógica

| Característica | Python | JavaScript (o similar) |
| :--- | :--- | :--- |
| **Sintaxis Condicional** | Usa `if`, `elif` (else if), y `else` seguidos de dos puntos (`:`) y **depende de la indentación** para definir los bloques de código. | Usa `if`, `else if`, y `else` seguidos de paréntesis para la condición `(...)` y **llaves `{}`** para definir los bloques de código. |

**Diferencia Clave:** Python usa la **indentación** (espacios o tabulaciones) para delimitar bloques, forzando un código limpio. La mayoría de los otros lenguajes usan llaves `{}` para la estructura de bloques, haciendo la indentación opcional pero recomendada.

## 3. Salida de Datos (Mostrar Resultado)

| Característica | Python | JavaScript (o similar) |
| :--- | :--- | :--- |
| **Función de Salida** | Utiliza la función `print()` para mostrar la información en la consola. | Típicamente usa `console.log()` para mostrar información en la consola. |
| **Template Strings** | Usa **f-strings** (cadenas de formato) para incrustar variables fácilmente: `f"El resultado es: {variable}"`. | Usa *Template Literals* (plantillas literales) con comillas invertidas (backticks) para incrustar variables: `` `El resultado es: ${variable}` ``. |

**Diferencia Clave:** Ambas implementaciones son similares para mostrar resultados, siendo las **f-strings** de Python una herramienta muy legible y potente.