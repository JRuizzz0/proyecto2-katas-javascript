const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  
  const newArray = [...array];
  
  const temp = newArray[index1];
  newArray[index1] = newArray[index2];
  newArray[index2] = temp;
  
  return newArray;
}

console.log("Array original:", fantasticFour);
console.log("Array con las posiciones 0 y 3 intercambiadas:", swap(fantasticFour, 0, 3));
console.log("Array con las posiciones 1 y 2 intercambiadas:", swap(fantasticFour, 1, 2));