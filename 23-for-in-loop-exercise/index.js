/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */
function logProperties(obj) {
  for (const propertyName in obj) {
    console.log(`Property name: ${propertyName}`);
  }
}
/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */
function getAllValues(obj) {
  /**
   * 1. create an new array
   * 2. take each value and add to array
   * 3. return your array
   */
  let newArray = [];
  for (const key in obj) {
    newArray.push(obj[key]);
  }
  return newArray;
}
getAllValues({ fruite: "apple", color: "green", weight: "200" }); // ['apple', 'green', '200']
/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(obj) {
  //   let values = [];

  //   for (const key in obj) {
  //     values.push(obj[key]);
  //   }

  const values = getAllValues(obj);
  return values.join(" ");
}

/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */
function propertyValueString(object) {
  for (const key in object) {
    let value = object[key];
    console.log(`${key}: ${value}`);
  }
}
