let step = 0;
let counter = 0;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */
const action = (symbol) => {
  if (symbol === "+") {
    counter = counter + step;
  } else if (symbol === "-") {
    counter = counter - step;
  }
  const valueElement = document.querySelector(".counter_value");
  valueElement.innerText = counter;
};
/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 *
 *
 * знайти кнопку
 * знайти інпут
 * clicks on button
 * встановити степ
 * ресетнути імпут велю видалити все з інпут
 * коли ти дістю з інпута то є стрінга і треба перетворити в цифру а тоді хьерегти в степ
 * знайти степ велю і встановити степ той який ти вже встоновила
 * інпут яким я буду змінювати ту змінну
 *
 *
 */
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#step");
  const value = parseInt(input.value);
  step = value;
  input.value = "";
  const elementStep = document.querySelector(".step_value");
  elementStep.innerText = step;
});

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const decremButton = document.querySelector("#decrement");
decremButton.addEventListener("click", () => {
  action("-");
});

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
const incrementButton = document.querySelector("#increment");
incrementButton.addEventListener("click", () => {
  action("+");
});
/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
let interval = null;
const autoDecrement = document.querySelector("#auto_decrement");
autoDecrement.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    action("-");
  }, 1000);
});
/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
const autoIncrement = document.querySelector("#auto_increment");
autoIncrement.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    action("+");
  }, 1000);
});
/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */
const stopAuto = document.querySelector("#stop_auto");
stopAuto.addEventListener("click", (event) => {
  event.preventDefault();
  clearInterval(interval);
});
