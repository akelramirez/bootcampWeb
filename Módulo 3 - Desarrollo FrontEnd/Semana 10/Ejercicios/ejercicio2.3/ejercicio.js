class ApiConsumer {
    async fetchPublicApiData(apiUrl) {
        console.log(`\n--- 1. Llamando a Rest API: ${apiUrl} ---`);
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const data = await response.json();

            console.log("Respuesta de la API recibida: ");

            if (Array.isArray(data) && data.length > 5) {
                console.log(data.slice(0, 5));
                console.log(`... y ${data.length - 5} elementos más.`);
            } else {
                console.log(data);
            }
            
        } catch (error) {
            console.error("Ocurrió un error al consumir la API:", error);
        }
    }

    printMessageAfterDelay(message, delayInMilliseconds) {
        console.log(`\n--- 2. Llamando a WebAPI (setTimeout) ---`);
        console.log(` Mensaje se imprimirá después de ${delayInMilliseconds / 1000} segundos...`);

        setTimeout(() => {
            console.log(`\n Mensaje de la WebAPI: **${message}**`);
        }, delayInMilliseconds);
    }
}

const consumer = new ApiConsumer();

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
consumer.fetchPublicApiData(API_URL);

const MESSAGE = "¡El tiempo de espera ha terminado! Este es el mensaje de la WebAPI.";
const DELAY = 3000; // 3000 milisegundos (3 segundos)
consumer.printMessageAfterDelay(MESSAGE, DELAY);

console.log("\nNota: El programa continuará ejecutándose mientras se espera el resultado de las operaciones asíncronas.");