/**
 * Exercise 1
 *
 * create an object {user}, which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */
let user = { firstName: "Tina", lastName: "Karl", age: 20 };
/**
 * Exercise 2
 *
 * create an object {allTypes} with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
let allTypes = {
  string: "Tor",
  number: 5,
  array: ["fox"],
  object: { call: 20 },
  function: function () {},
  boolean: true,
};
/**
 * Exercise 3
 *
 * create a function {createMovieObject} which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */
function createMovieObject(name, rating, ticketPrice) {
  let movie = {
    name: name,
    rating: rating,
    ticketPrice: ticketPrice,
  };
  return movie;
}
