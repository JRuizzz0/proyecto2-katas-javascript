const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sum = 0;
  for (let num of numberList) {
    sum += num;
  }
  return sum;
}


console.log("La suma de los números es:", sumNumbers(numbers));