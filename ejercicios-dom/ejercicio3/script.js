// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) elementToRemove.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li en el div data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});
printHereDiv.appendChild(ulCars);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga h4 e img.
const countriesList = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countriesList.forEach(country => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'country-card'; 

    const h4 = document.createElement('h4');
    h4.textContent = country.title;

    const img = document.createElement('img');
    img.src = country.imgUrl;

    //1.6: Botón para eliminar este div específico
    const btnDeleteThis = document.createElement('button');
    btnDeleteThis.textContent = 'Eliminar este elemento';
    btnDeleteThis.addEventListener('click', () => {
        cardDiv.remove();
    });

    cardDiv.appendChild(h4);
    cardDiv.appendChild(img);
    cardDiv.appendChild(btnDeleteThis);
    document.body.appendChild(cardDiv);
});

// 1.5 Crea un botón que elimine el último elemento de la serie de divs.
const btnDeleteLast = document.createElement('button');
btnDeleteLast.textContent = 'Eliminar última tarjeta';
document.body.appendChild(btnDeleteLast);

btnDeleteLast.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.country-card');
    if (allCards.length > 0) {
        allCards[allCards.length - 1].remove(); 
    }
});