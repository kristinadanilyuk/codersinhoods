// **** DO NOT TOUCH THIS CODE ****
// ============================
const user = {};
// ============================
console.log(user);
/**
 * Exercise 1
 *
 * add property "firstName" to "user" and assign any name
 */
user.firstName = "lola";
console.log(user);
/**
 * Exercise 2
 *
 * add property "lastName" to "user" and assign any last name
 */
user.lastName = "lola";
console.log(user);
/**
 * Exercise 3
 * create a function "addANewProperty" which takes
 * 2 params, first - property name and second - property value
 * and set a new property for 'user' object
 */
function addANewProperty(key, value) {
  user[key] = value;
}
addANewProperty("doorColor", "green");

console.log(user);
