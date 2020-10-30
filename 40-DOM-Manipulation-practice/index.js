/**
 * Exercise 1
 * create a function {createAList}
 *
 * Requirements:
 * 1. create an unordered list with class "list"
 * 2. with 1 second interval add list item to ".list" element
 * 3. you should add only 5 list items.
 * 4. list item text should be "Item $"($ - position in the list)
 */
const createAList = () => {
  const ul = document.createElement("ul");
  ul.classList.add("list");
  document.body.appendChild(ul);
  let counter = 0;
  let myInterval = setInterval(() => {
    const li = document.createElement("li");
    li.innerText = `Item ${counter}`;
    ul.appendChild(li);
    counter++;
    if (counter > 4) {
      clearInterval(myInterval);
    }
  }, 1000);
};

/**
 * Exercise 2
 *
 * create a function {styleElement}
 *
Requirements:
 * 1. select the third list item from ".myList"
 * 2. set background to "green" color
 * 3. set color to "white"
 * 4. set font size to 2em * 
 */
const styleElement = () => {
  const li = document.querySelector(".myList li:nth-child(3)");
  li.style.backgroundColor = "green";
  li.style.color = "white";
  li.style.fontSize = "2em";
};

/**
 * Exercise 3
 *
 * create a function {removeLastChild}
 * Requirements:
 * 1. select last element from the ".myList"
 * 2. wait 2 seconds and remove the element from the list
 */
const removeLastChild = () => {
  const lis = document.querySelectorAll(".myList li");

  const last = lis[lis.length - 1];
  setTimeout(() => {
    last.remove();
  }, 2000);
};

/**
 * Exercise 4
 *
 * create a function {createAMessage} which takes a message as parameter
 *
 * Requirements:
 * 1. create p element with class "message"
 * 2. text should be your {message}
 * 2. add it to the DOM
 * 4. after 3s add class "visible"
 * 5. after another 3s add class "hide"
 * 6. after another 2s remove from DOM
 *
 * NOTE: check css file to see how we toggle styles
 * based on class "visible"
 */
const createAMessage = (message) => {
  const p = document.createElement("p");
  p.classList.add("message");
  p.innerText = message;
  document.body.appendChild(p);
  setTimeout(() => {
    p.classList.add("visible");
    setTimeout(() => {
      p.classList.add("hide");
      setTimeout(() => {
        p.remove();
      }, 2000);
    }, 3000);
  }, 3000);
};
