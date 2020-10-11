const myName = "John"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */
function greetVisitors() {
  for (let index = 0; index < visitors.length; index++) {
    const visitor = visitors[index];
    console.log(`Hi ${visitor}, my name is ${myName}!`);
  }
}
// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */
function getElementIndex(number) {
  for (let index = 0; index < numbers.length; index++) {
    if (number === numbers[index]) {
      return index;
    }
  }
  return "Item not found";
}
// ========================

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */
function total() {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }
  return total;
}

// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */
function addIndex() {
  let numbers = [];
  for (let index = 0; index < numbersForIndexes.length; index++) {
    numbers.push(numbersForIndexes[index] + index);
  }
  return numbers;
}
const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */
function lowestNumber() {
  let number = forLowestNumber[0];
  for (let index = 0; index < forLowestNumber.length; index++) {
    console.log(forLowestNumber[index]);
    if (number > forLowestNumber[index]) {
      console.log(number, forLowestNumber[index]);
      number = forLowestNumber[index];
    }
  }
  return number;
}
lowestNumber();
