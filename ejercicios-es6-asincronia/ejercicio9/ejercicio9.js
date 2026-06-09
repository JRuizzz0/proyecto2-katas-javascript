const randomImage = document.querySelector('.random-image');

const getRandomPokemonId = () => Math.floor(Math.random() * 151) + 1;

const getRandomPokemon = async () => {
    const id = getRandomPokemonId();
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        
       
        const imageUrl = data.sprites.other['official-artwork'].front_default || data.sprites.front_default;
        randomImage.src = imageUrl;
        randomImage.alt = data.name;

    } catch (error) {
        console.error('Error Pokemon:', error);
    }
};

getRandomPokemon();