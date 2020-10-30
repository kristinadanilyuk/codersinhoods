// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */
const createDOMElement = (tagName) => {
  const element = document.createElement(tagName);
  return element;
};

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */
const addPTag = (text) => {
  const element = document.createElement("p");
  element.innerText = text;
  const body = document.querySelector("body");
  body.appendChild(element);
};

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */
const addElementWithClass = (tagName, text, className) => {
  const element = document.createElement(tagName);
  element.innerText = text;
  element.classList.add(className);
  const body = document.querySelector("body");
  body.appendChild(element);
};

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */
const addElementWithMultipleClasses = (tagName, text, classesArray) => {
  const element = document.createElement(tagName);
  element.innerText = text;
  element.classList.add(...classesArray);
  const body = document.querySelector("body");
  body.appendChild(element);
};

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */
const buildAList = (list, aClass, number) => {
  const element = document.createElement(list);
  element.classList.add(aClass);
  for (let index = 0; index < number; index++) {
    const li = document.createElement("li");
    li.innerText = `Item ${index}`;
    element.appendChild(li);
  }
  document.body.appendChild(element);
};

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

const prependLiToList = (text, aClass) => {
  const li = document.createElement("li");
  li.classList.add(aClass);
  li.innerText = text;
  const kitten = document.querySelector(".list");
  kitten.prepend(li);
};

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */
const pushToSelectedPosition = (text, aClass, position) => {
  const li = document.createElement("li");
  li.classList.add(aClass);
  li.innerText = text;
  const list = document.querySelector(".list");
  list.prepend(li);
  list.insertBefore(li, list.children[position + 1]);
};
/**
 * Exercise 8
 *
 * create a function {deleteSelectedElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */
const deleteSelectedElements = (parElement, elSelector) => {
  const parElem = document.querySelector(parElement);
  const ancestors = parElem.querySelectorAll(elSelector);
  [...ancestors].forEach((element) => {
    element.remove();
  });
};
