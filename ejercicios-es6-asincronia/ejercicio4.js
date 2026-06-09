const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// 4.1 Mayores de 18
const adults = ages.filter(age => age > 18);
console.log("4.1 Edades mayores de 18:", adults);

// 4.2 Edades pares
const evenAges = ages.filter(age => age % 2 === 0);
console.log("4.2 Edades pares:", evenAges);

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// 4.3 Juego más jugado es LoL
const lolStreamers = streamers.filter(s => s.gameMorePlayed === 'League of Legends');
console.log("4.3 Streamers de LoL:", lolStreamers);

// 4.4 Incluyen 'u' en su nombre
const uStreamers = streamers.filter(s => s.name.includes('u'));
console.log("4.4 Streamers con 'u' en el nombre:", uStreamers);

// 4.5 Incluyen 'Legends' y manipular propiedad con map
const legendsStreamers = streamers
    .filter(s => s.gameMorePlayed.includes('Legends'))
    .map(s => {
        if (s.age > 35) {
            return {...s, gameMorePlayed: s.gameMorePlayed.toUpperCase()};
        }
        return s;
    });
console.log("4.5 Streamers de Legends modificados:", legendsStreamers);