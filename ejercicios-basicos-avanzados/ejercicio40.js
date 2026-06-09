const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  return array.indexOf(text); 
}

function removeItem(array, text) {
  
  const index = findArrayIndex(array, text);
  
  const newArray = [...array]; 
  
  if (index !== -1) {
    newArray.splice(index, 1);
  }
  return newArray;
}

console.log("Índice de Rey:", findArrayIndex(mainCharacters, "Rey"));
console.log("Array sin Han Solo:", removeItem(mainCharacters, "Han Solo"));
console.log("Array sin Anakin:", removeItem(mainCharacters, "Anakin"));