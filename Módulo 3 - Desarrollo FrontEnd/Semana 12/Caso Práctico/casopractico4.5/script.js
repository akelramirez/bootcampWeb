// Almacenamiento local simulado para usuarios
// En un entorno real, esto sería una base de datos o un servidor.
// Funciones auxiliares para leer/guardar usuarios en localStorage
function loadUsers() {
    try {
        const raw = localStorage.getItem('registeredUsers');
        if (!raw) return [{ username: 'usuario', password: 'password', age: 30 }]; // usuario por defecto
        return JSON.parse(raw);
    } catch (err) {
        console.error('Error leyendo usuarios desde localStorage:', err);
        return [{ username: 'usuario', password: 'password', age: 30 }];
    }
}

function saveUsers(u) {
    try {
        localStorage.setItem('registeredUsers', JSON.stringify(u));
    } catch (err) {
        console.error('Error guardando usuarios en localStorage:', err);
    }
}

// Estado en memoria (se inicializa desde localStorage)
let users = loadUsers();

function addUser(user) {
    users.push(user);
    saveUsers(users);
}

function userExists(username) {
    return users.some(u => u.username === username);
}

function findUserByCredentials(username, password) {
    return users.find(u => u.username === username && u.password === password);
}

// Obtener referencias a elementos si existen en la página actual
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const welcomeContainer = document.getElementById('welcome-container');

// Botones y Formularios (pueden ser null si la página no los contiene)
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginMessage = document.getElementById('login-message');
const registerMessage = document.getElementById('register-message');
const welcomeMessage = document.getElementById('welcome-message');
const apiResult = document.getElementById('api-result');
const getDataBtn = document.getElementById('get-data-btn');
const postDataBtn = document.getElementById('post-data-btn');
const logoutBtn = document.getElementById('logout-btn');
const registerToggleBtn = document.getElementById('register-toggle');
const loginToggleBtn = document.getElementById('login-toggle');


// Función para alternar las vistas (Login, Registro, Bienvenida)
function showView(view) {
    // Remover clase 'active' solo en contenedores que existen
    if (loginContainer) loginContainer.classList.remove('active');
    if (registerContainer) registerContainer.classList.remove('active');
    if (welcomeContainer) welcomeContainer.classList.remove('active');

    if (view === 'login' && loginContainer) {
        loginContainer.classList.add('active');
    } else if (view === 'register' && registerContainer) {
        registerContainer.classList.add('active');
    } else if (view === 'welcome' && welcomeContainer) {
        welcomeContainer.classList.add('active');
    }

    // Limpiar mensajes y resultados si existen
    if (loginMessage) loginMessage.textContent = '';
    if (registerMessage) registerMessage.textContent = '';
    if (apiResult) apiResult.textContent = '';
}


// --- Lógica de Vistas (DOM) [cite: 6] ---

// Cambiar a la vista de Registro
// Cambiar a la vista de Registro
registerToggleBtn?.addEventListener('click', () => {
    if (registerContainer) {
        showView('register');
    } else {
        // Navegar a la página de registro si el contenedor no existe en esta página
        window.location.href = 'registro.html';
    }
});

// Cambiar a la vista de Login
loginToggleBtn?.addEventListener('click', () => {
    if (loginContainer) {
        showView('login');
    } else {
        // Volver a la página principal (login)
        window.location.href = 'index.html';
    }
});


// --- Lógica de Autenticación [cite: 10, 11] ---

// Manejar el envío del formulario de Login
// Manejar el envío del formulario de Login
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = findUserByCredentials(username, password);

        if (user) {
            // Acceso permitido [cite: 11]
            // Guardar usuario activo en localStorage para persistencia de sesión
            localStorage.setItem('currentUser', user.username);
            if (welcomeMessage) welcomeMessage.textContent = `👋 Bienvenido, ${user.username}`;
            // Si la página actual tiene la vista de bienvenida, mostrarla; si no, navegar a ingreso.html
            if (welcomeContainer) {
                showView('welcome');
            } else {
                window.location.href = 'ingreso.html';
            }
        } else {
            // Credenciales inválidas [cite: 11]
            if (loginMessage) loginMessage.textContent = '❌ Credenciales inválidas. Inténtalo de nuevo.';
        }
    });
}
// Manejar el envío del formulario de Registro [cite: 12]
// Manejar el envío del formulario de Registro
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('reg-username').value;
        const newPassword = document.getElementById('reg-password').value;
        const newAge = document.getElementById('reg-age').value;

        if (userExists(newUsername)) {
            if (registerMessage) registerMessage.textContent = '❌ El usuario ya existe.';
            return;
        }

        const newUser = {
            username: newUsername.trim(),
            password: newPassword,
            age: parseInt(newAge) || 0
        };

        addUser(newUser); // Actualiza memoria y localStorage
        if (registerMessage) registerMessage.textContent = '✅ Usuario registrado con éxito. Redirigiendo a login...';
        registerForm.reset();
        // Redirigir al login después de un pequeño retardo
        setTimeout(() => { window.location.href = 'index.html'; }, 1200);
    });
}

// Cerrar Sesión
// Cerrar Sesión
logoutBtn?.addEventListener('click', () => {
    // Remover sesión y volver al login
    localStorage.removeItem('currentUser');
    if (loginContainer) {
        showView('login');
    } else {
        window.location.href = 'index.html';
    }
});


// --- Lógica de Consumo de API [cite: 14, 15] ---

// 1: Petición GET a una API pública [cite: 14]
// 1: Petición GET a una API pública [cite: 14]
getDataBtn?.addEventListener('click', async () => {
    if (apiResult) apiResult.textContent = 'Cargando datos (GET)...';
    const API_URL = 'https://jsonplaceholder.typicode.com/posts/1'; // Endpoint de ejemplo

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        // Mostrar la respuesta con formato JSON legible
        if (apiResult) apiResult.textContent = '✅ Respuesta GET exitosa:\n' + JSON.stringify(data, null, 2);
    } catch (error) {
        if (apiResult) apiResult.textContent = '❌ Error al obtener datos: ' + error.message;
        console.error('Error GET:', error);
    }
});


// 2: Petición POST a una API pública [cite: 15]
// 2: Petición POST a una API pública [cite: 15]
postDataBtn?.addEventListener('click', async () => {
    if (apiResult) apiResult.textContent = 'Enviando datos (POST)...';
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // Endpoint de ejemplo

    const dataToSend = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        // Mostrar la respuesta (JSONPlaceholder simula la creación y devuelve el objeto)
        if (apiResult) apiResult.textContent = '✅ Respuesta POST exitosa (Recurso Creado):\n' + JSON.stringify(data, null, 2);
    } catch (error) {
        if (apiResult) apiResult.textContent = '❌ Error al enviar datos: ' + error.message;
        console.error('Error POST:', error);
    }
});


// Inicializar la vista al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = localStorage.getItem('currentUser');

    // Si estamos en la página de ingreso (o tenemos welcomeContainer) mostrar el nombre del usuario
    if (welcomeContainer) {
        if (currentUser) {
            if (welcomeMessage) welcomeMessage.textContent = `👋 Bienvenido, ${currentUser}`;
            showView('welcome');
        } else {
            // Si no hay usuario activo, forzar login
            window.location.href = 'index.html';
        }
        return;
    }

    // Si estamos en la página de login y ya hay sesión iniciada, redirigir a ingreso
    if (loginContainer) {
        if (currentUser) {
            window.location.href = 'ingreso.html';
        } else {
            showView('login');
        }
        return;
    }

    // Si estamos en la página de registro simplemente no hacemos nada especial (se muestra la página por defecto)
    if (registerContainer) {
        showView('register');
        return;
    }
});
