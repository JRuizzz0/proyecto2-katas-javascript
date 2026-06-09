const characterListSelect = document.querySelector('#character-list');
const characterImage = document.querySelector('.character-image');
let charactersData = [];


const getCharacters = async () => {
    try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        charactersData = await response.json();
        
      
        charactersData.forEach(character => {
            const option = document.createElement('option');
            option.value = character.imageUrl; 
            option.textContent = character.fullName;
            characterListSelect.appendChild(option);
        });

        
        if(charactersData.length > 0) {
            characterImage.src = charactersData[0].imageUrl;
        }

    } catch (error) {
        console.error('Error characters:', error);
    }
};


characterListSelect.addEventListener('change', (event) => {
    characterImage.src = event.target.value;
});

getCharacters();