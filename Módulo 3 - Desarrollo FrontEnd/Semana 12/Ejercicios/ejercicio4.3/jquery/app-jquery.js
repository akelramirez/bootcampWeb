// Debemos envolver el código para asegurar que el DOM esté completamente cargado.
$(document).ready(function() {
    
    // Definimos la URL de la API de usuarios
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    // Referencia al elemento <ul> usando el selector de jQuery
    const $userList = $('#user-list');
    $userList.empty(); // Limpiar el contenido 'Cargando...'

    // Función asíncrona para obtener y mostrar los usuarios usando async/await con jQuery
    // jQuery's $.get devuelve un objeto jqXHR que es thenable, por lo que puede usarse con await.
    async function fetchUsersWithJQuery() {
        try {
            const users = await $.get(API_URL);

            // Iterar sobre los usuarios
            users.forEach(user => {
                // Crear el elemento <li> y añadirlo a la lista
                $userList.append('<li>' + user.username + '</li>');
            });

            return users;
        } catch (error) {
            console.error('Error al obtener los usuarios con jQuery:', error);
            $userList.append('<li>Error al cargar los usuarios.</li>');
            throw error;
        }
    }

    // Llamar a la función
    fetchUsersWithJQuery().catch(() => {/* el error ya fue manejado en la función */});
});