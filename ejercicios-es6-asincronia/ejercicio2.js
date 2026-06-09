// 2.1 Copia de array
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log("2.1 Copia de pointsList:", pointsListCopy);

// 2.2 Copia de objeto
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log("2.2 Copia de toy:", toyCopy);

// 2.3 Fusión de arrays
const pointsLis2 = [54, 87, 99, 65, 32];
const combinedPoints = [...pointsList, ...pointsLis2];
console.log("2.3 Arrays fusionados:", combinedPoints);

// 2.4 Fusión de objetos
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const combinedToy = {...toy, ...toyUpdate};
console.log("2.4 Objetos fusionados:", combinedToy);

// 2.5 Eliminar posición 2 creando copia
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)]; 
console.log("2.5 Copia de colors sin la posición 2:", colorsCopy);