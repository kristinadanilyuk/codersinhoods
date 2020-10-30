// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */
const clickTheButton = () => {
  const button = document.querySelector("div.click button");
  button.addEventListener("click", () => {
    console.log("hello");
  });
};

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
const hoverOver = () => {
  const tag = document.querySelector("div.mouseover a");
  tag.addEventListener("mouseover", () => {
    console.log("hello");
  });
};

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
const handleLeave = () => {
  const tag = document.querySelector("div.mouseover a");
  tag.addEventListener("mouseout", () => {
    console.log("out");
  });
};

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */
const focusOnMe = () => {
  const input = document.querySelector("div input");
  input.addEventListener("focus", () => {
    console.log("raw");
  });
};

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */
const clickElsewhere = () => {
  const input = document.querySelector("div input");
  input.addEventListener("blur", () => {
    console.log("rar");
  });
};

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */
const pressAKey = () => {
  const input = document.querySelector("div input");
  input.addEventListener("keydown", () => {
    console.log("try");
  });
};
/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const releaseAKey = () => {
  const input = document.querySelector("div input");
  input.addEventListener("keyup", () => {
    console.log("let");
  });
};
/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
const inputToUpperCase = () => {
  const input = document.querySelector("div input");
  input.addEventListener("keyup", () => {
    const lialia = input.value;
    input.value = lialia.toUpperCase();
    // get value from input
    // convert value to uppercase
    // set converted value as a new value of input
  });
};
/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
const handleSelectChange = () => {
  const select = document.querySelector("#items");
  select.addEventListener("change", () => {
    console.log(select.value);
  });
};

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
const submitFormHandler = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = form.queryS іelectorAll("input");
    const object = {};
    [...inputs].forEach((input) => {
      object[input.name] = input.value;
    });
    console.log(object);
  });
};

/**
 * 1. find form
 * 2. add submit event listener on form
 * 3. find all inputs inside form
 * 4. create an object where you will store all values
 * 5. go thorught all inputs take inputs names and values and set as key: value pairs in your object
 * 6. console log your object
 */
/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */
