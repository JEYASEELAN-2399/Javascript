const fruits = [
  "apple",
  "orange",
  "pineapple",
  "watermelon",
  "lemonade",
  "blueberry",
];

/*for (let i=0; i<fruits.length; i++){
console.log(i+1,fruits[i])
}
*/ // traditional way of writing the for loop

for (const fruit of fruits) {
  console.log(fruit);
} // it prints all the elements in the array

fruits.forEach((fruit, index) => {
  console.log(`${index}:${fruit}`);
}); // it prints all the elements with its index

const number = [1, 2, 3, 4, 5, 6];

for (const numbers of number) {
  console.log(numbers);
}

// log a number into a new array and double it

let result = [];

for (const numbers of number) {
  result.push(numbers * 2);
}

console.log(result);
