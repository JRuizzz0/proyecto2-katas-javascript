const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  if (list.length === 0) return 0;
  let sum = 0;
  for (let element of list) {
    if (typeof element === 'number') {
      sum += element;
    } else if (typeof element === 'string') {
      sum += element.length;
    }
  }
  return sum / list.length;
}


console.log("El promedio mezclado es:", averageWord(mixedElements));