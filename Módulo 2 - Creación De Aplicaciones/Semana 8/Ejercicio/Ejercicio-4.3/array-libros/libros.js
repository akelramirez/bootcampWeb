var biblioteca = [
    {
    autor: "Bill Gates",
    titulo: "The Road Ahead",
    estadolectura: true
    },
    {
    autor: "Steve Jobs",
    titulo: "Walter Isaacson",
    estadolectura: true
    },
    {
    autor: "Suzanne Collins",
    titulo: "Mockingjay: The Final Book of The Hunger Games",
    estadolectura: false
    }
];

// Función para mostrar el estado de lectura de la biblioteca
function mostrarEstadoDeLectura(libros) {
    console.log("--- Estado de Lectura de la Biblioteca ---");

    libros.forEach(libro => {
        const { titulo, autor, estadolectura } = libro;
        let mensajeEstado;

        // Determinar el mensaje de estado basado en la propiedad estadolectura
        if (estadolectura === true) {
            mensajeEstado = "¡Ya has leído este libro!";
        } else {
            mensajeEstado = "Aún no has leído este libro.";
        }

        // Imprimir la información del libro
        console.log(`\nTítulo: ${titulo}`);
        console.log(`Autor: ${autor}`);
        console.log(`Estado: ${mensajeEstado}`);
    });
}
// Llamar a la función para mostrar el estado de lectura
mostrarEstadoDeLectura(biblioteca);