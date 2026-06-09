const streamersList = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputFilter = document.querySelector('[data-function="toFilterStreamers"]');

inputFilter.addEventListener('input', (event) => {
    const keyword = event.target.value.toLowerCase();
    const filteredStreamers = streamersList.filter(s => 
        s.name.toLowerCase().includes(keyword)
    );
    console.log(filteredStreamers);
});