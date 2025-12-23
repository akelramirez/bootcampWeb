// Definimos la URL de la API de usuarios
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Función asíncrona para obtener y mostrar los usuarios usando async/await
async function fetchUsersWithAxios() {
    // Referencia al elemento <ul> en el HTML
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpiar el contenido 'Cargando...'

    try {
        // Realizar la solicitud GET con Axios. 
        // 'await' espera a que la promesa se resuelva.
        const response = await axios.get(API_URL);

        // La data está directamente en 'response.data' con Axios
        const users = response.data;


        // Iterar sobre los usuarios y crear los elementos <li>
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.username; // Mostrar el nombre de usuario
            userList.appendChild(listItem);
        });

        // Devolver los usuarios por si alguien quiere usar la promesa
        return users;

    } catch (error) {
        // Capturar y mostrar errores
        console.error('Error al obtener los usuarios con Axios:', error);
        userList.innerHTML = '<li>Error al cargar los usuarios.</li>';
    }
}

// Llamar a la función
fetchUsersWithAxios();