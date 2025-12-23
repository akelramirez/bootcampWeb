// Paso 1: Definir la URL de la API
// *** REEMPLAZA ESTA URL CON LA PROPORCIONADA POR TU PROFESOR ***
const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5'; 

// Paso 2: Crear una función asíncrona para obtener y mostrar los datos
async function fetchAndDisplayData() {
    // Referencia al contenedor HTML donde se mostrarán los datos
    const container = document.getElementById('api-data-container');
    container.innerHTML = '<p>Obteniendo datos de la API...</p>'; // Mensaje de carga

    try {
        // 1. Consumir la API (usando JS) [cite: 12]
        const response = await fetch(API_URL);
        
        // Manejo de errores en la respuesta HTTP
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        // 2. Almacenar los datos relevantes en variables 
        const data = await response.json(); 

        // 3. Mostrar el contenido de la API en la página web 
        if (data.length === 0) {
            container.innerHTML = '<p>No se encontraron datos en la API.</p>';
            return;
        }

        // Limpiar el contenedor antes de inyectar los datos
        container.innerHTML = ''; 

        // Iterar sobre los datos y crear elementos HTML para mostrarlos
        data.forEach((post, index) => {
            // Ejemplo de almacenamiento de datos relevantes en variables
            const postId = post.id;
            const postTitle = post.title; 
            const postBody = post.body;

            // Creación de elemento usando las variables almacenadas
            const itemDiv = document.createElement('div');
            // Usamos la clase 'item' del CSS con BEM
            itemDiv.classList.add('item');

            // Opcional: Aplicar un modificador BEM a un elemento específico
            if (index === 0) {
                itemDiv.classList.add('item--highlight');
            }

            itemDiv.innerHTML = `
                <h3 class="item__title">ID ${postId}: ${postTitle}</h3>
                <p class="item__body">${postBody}</p>
            `;
            
            container.appendChild(itemDiv);
        });

    } catch (error) {
        console.error('Hubo un error al consumir la API:', error);
        container.innerHTML = `<p style="color: red;">Error al cargar los datos: ${error.message}</p>`;
    }
}

// Ejecutar la función para iniciar el consumo de la API
fetchAndDisplayData();