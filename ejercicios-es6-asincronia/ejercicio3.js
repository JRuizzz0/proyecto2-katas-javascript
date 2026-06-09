const users = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];

// 3.1 Extraer nombres
const userNames = users.map(user => user.name);
console.log("3.1 Nombres de usuarios:", userNames);

// 3.2 Cambiar nombre si empieza por 'A'
const modifiedNames = users.map(user => user.name.startsWith('A') ? 'Anacleto' : user.name);
console.log("3.2 Nombres modificados (Anacleto):", modifiedNames);

// 3.3 Añadir string basado en un booleano
const cities = [
	{isVisited: true, name: 'Tokyo'},
	{isVisited: false, name: 'Madagascar'},
	{isVisited: true, name: 'Amsterdam'},
	{isVisited: false, name: 'Seul'}
];
const visitedCitiesNames = cities.map(city => city.isVisited ? `${city.name} (Visitado)` : city.name);
console.log("3.3 Ciudades visitadas:", visitedCitiesNames);