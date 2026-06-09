// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btnShowMe = document.querySelector('.showme');
console.log('1.1:', btnShowMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado');
console.log('1.2:', h1Pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
const allParagraphs = document.querySelectorAll('p');
console.log('1.3:', allParagraphs);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
const allPokemon = document.querySelectorAll('.pokemon');
console.log('1.4:', allPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log('1.5:', allTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe"
const thirdTestMe = document.querySelectorAll('[data-function="testMe"]')[2];
console.log('1.6:', thirdTestMe);