const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const counter = {};
  for (let word of list) {
    if (counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
  }
  return counter;
}

console.log("Conteo de palabras:", repeatCounter(words));