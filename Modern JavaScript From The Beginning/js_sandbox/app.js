// Log to console
// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2})
// console.table({a:1, b:2})

// console.error('This is some error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello')
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
// console.timeEnd('Hello')
/*
multi
line
comments
*/
// const num1 = 100;
// const num2 = 50;
// let val;

// //simple maths
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// //Math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(6.9);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,3,4,5,6,77,1000,12,1);
// val = Math.max(2,3,4,5,6,77,1000,12,1)
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1); //gets random number between 1-20


const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad'

let val;

//concatenation
val = firstName + " " + lastName;

//Append
val = 'Yusuf ';
val += 'Elbourki';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping
val = 'That\'s great, I can\'t wait';

//length
val = firstName.length;

//concat (method)
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//Index of (2 methods)
val = firstName[0];

val = firstName.indexOf('l');
val = lastName.lastIndexOf('s');

// charAt()
val = firstName.charAt('2')
//Get last character
val = firstName.charAt(firstName.length - 1);

//subString()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split()
val = str.split(' ');

// replace()
val = str.replace('Brad', 'Jack')

// includes()
val = str.includes('Hello');

console.log(val);

// template literal
`Hello, My name is ${firstName}. I am ${age} years old`

let myAge = 26;

if (myAge >= 18) {
  console.log('You may enter');
} else console.log('Underage')

//Array Methods

const lotteryNumbers = [7, 13, 23, 6, 82];

lotteryNumbers.push(69);

console.log(lotteryNumbers);

const num = [1,2,3,4];

let userInput = prompt();

num.push(userInput);

console.log(num);

//Object Literal:

const product = {
  name: 'Gummy Bears',
  inStock: true,
  price: 1.99,
  flavors: ['grape', 'apple', 'cherry']
}

//Accessing via keys in an Object Literal (keys are converted to strings in memory):
product.inStock
//or
product['inStock']

//For Loop (prints numbers 1-10) common when number of iterations is known:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//For Loop (prints evenn numbers form 2-20):
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//Itterating (looping) over an Array:

const fruits = ['apples', 'oranges', 'pears'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

//Itterating backwards:

for (let i = fruits.lengths - 1; i >= 0; i--) {
  console.log(fruits[i])
}

//Nested for loop:

for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`)
  for (let j = 1; j< 4; j++) {
    console.log(`  j is ${j}`)
  }
}

//Itterating over a nested Array:

const seatingChart = [
  ['Kristen', 'Erik', 'Namita',],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`Row #${i + 1}`)
  for (let j = 0; j < row.length; j++) {
    console.log(row[j])
  }
}

//row = declared to represent each sub-array / i
//j = values within sub-arrays
//each time sub arrays (i) are printed, values within them (j) is are printed too


//While Loop (prints numbers 1-10) more common to use when number of iterations is not known:

let count = 0;
while(count < 10){
  count++;
  console.log(count)
}

//more common while loop:

const secretCode = 'PurplePrince'

let guess = prompt('Enter the secret code...')
while (guess !== secretCode) {
  prompt('Enter the secret code...')
}
console.log('Congrats! You guessed it!')




