/**
 * Exercise 1
 *
 * create an event listener which will show
 * a popup(add class "open" to "popup")
 * when you double click on ".trigger"
 */

const elem = document.querySelector(".trigger");
elem.addEventListener("dblclick", () => {
  const popup = document.querySelector(".popup");
  popup.classList.add("open");
});

/**
 * 1. find trigger element
 * 2. add dblclick event on trigger
 * 3. when double clicked add class open to popup
 */
/**
 * Exercise 2
 *
 * create an event listener which will toggle
 * zoom class on image when you double click on
 * image container(".img")
 */
const imgContainer = document.querySelector(".img");
imgContainer.addEventListener("dblclick", () => {
  const img = document.querySelector("img");
  img.classList.add("zoom");
});
/**
 * Exercise 3
 *
 * create an event listener which will stop/start music player
 * when you switch tab/come back to the tab in the browser.
 *
 * NOTE: to test please interact with the page, and switch tabs
 */
const musPlay = document.querySelector("audio");
window.addEventListener("blur", () => {
  musPlay.pause();
});

window.addEventListener("focus", () => {
  musPlay.play();
});
