// 1.1 Object destructuring
const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const { title, gender, year } = game;
console.log(title, gender, year);

// 1.2 Array destructuring
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [ fruit1, fruit2, fruit3 ] = fruits;
console.log(fruit1, fruit2, fruit3);

// 1.3 Destructuring en el retorno de una función
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};
const { name: animalName, race } = animalFunction(); 
console.log(animalName, race);

// 1.4 Destructuring anidado
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };
const { name: carName, itv } = car;
const [ year1, year2, year3 ] = itv;
console.log(carName, itv, year1, year2, year3);