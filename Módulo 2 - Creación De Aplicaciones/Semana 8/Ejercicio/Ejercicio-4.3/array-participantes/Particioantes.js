let participantes = ['Elena', 'Carlos', 'Javier', 'Laura', 'Miguel', 'Patricia'];

console.log('--- Paso 1: Array Inicial Declarado ---');
console.log(participantes);
console.log('--------------------------------------\n');

// 2. Clasificación actual.
console.log('--- Paso 2: Clasificación Actual ---');
participantes.forEach((nombre, indice) => {
    console.log(`${indice + 1}. ${nombre}`);
});
console.log('--------------------------------------\n');

const indiceLaura = participantes.indexOf('Laura');
const indiceJavier = participantes.indexOf('Javier');

if (indiceLaura !== -1 && indiceJavier !== -1) {
    [participantes[indiceLaura], participantes[indiceJavier]] = [participantes[indiceJavier], participantes[indiceLaura]];
}
console.log('--- Paso 4: Laura supera a Javier ---');
console.log(participantes);
console.log('--------------------------------------\n');


participantes.pop();
console.log('--- Paso 5: Patricia es descalificada ---');
console.log(participantes);
// Clasificación ahora: ['Elena', 'Carlos', 'Laura', 'Javier', 'Miguel']
console.log('--------------------------------------\n');

participantes.splice(1, 0, 'Raúl', 'Sofía');

console.log('--- Paso 6: Raúl y Sofía se incorporan ---');
console.log(participantes);
// Clasificación ahora: ['Elena', 'Raúl', 'Sofía', 'Carlos', 'Laura', 'Javier', 'Miguel']
console.log('--------------------------------------\n');

participantes.unshift('Carmen');
console.log('--- Paso 7: Carmen toma la posición principal ---');
console.log(participantes);
// Clasificación final: ['Carmen', 'Elena', 'Raúl', 'Sofía', 'Carlos', 'Laura', 'Javier', 'Miguel']
console.log('--------------------------------------\n');
console.log('--- Paso 8: Clasificación Final ---');
participantes.forEach((nombre, indice) => {
    console.log(`${indice + 1}. ${nombre}`);
});