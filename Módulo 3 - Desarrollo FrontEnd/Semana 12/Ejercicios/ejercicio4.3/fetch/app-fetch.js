// Definimos la URL de la API de usuarios
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Función asíncrona para obtener y mostrar los usuarios usando async/await
async function fetchUsersWithFetch() {
    // Referencia al elemento <ul> en el HTML
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpiar el contenido 'Cargando...'

    try {
        // Esperar la respuesta de fetch
        const response = await fetch(API_URL);

        // Verificar estado HTTP
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convertir a JSON
        const users = await response.json();

        // Iterar sobre los usuarios y crear los elementos <li>
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.username; // Mostrar el nombre de usuario
            userList.appendChild(listItem);
        });

        // Devolver los usuarios por si alguien quiere usar la promesa
        return users;

    } catch (error) {
        console.error('Error al obtener los usuarios con Fetch:', error);
        userList.innerHTML = '<li>Error al cargar los usuarios.</li>';
        // Re-lanzar el error para que la promesa rechazada sea accesible
        throw error;
    }
}

// Llamar a la función (devuelve una Promesa porque es async)
fetchUsersWithFetch().catch(() => {/* el error ya fue manejado en la función */});