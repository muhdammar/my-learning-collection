// Learn How To Use Generator Functions in JavaScript
// In this lesson, we're learning about a new type of function that ES6 introduced to JavaScript -
//namely the Generator functions.

// Generator functions provide a special ability that ordinary functions do not.
// They are (amongst other things) very good for efficiently iterating through large datasets.

function getPizzaIngredients() {
  console.log("Wheat");
}

getPizzaIngredients();

//generator function
function* getPizzaIngredients() {
  yield "Wheat";
  yield "Flour";
}

const generatorObject = getPizzaIngredients();
console.log(generatorObject);
console.log(generatorObject.next());
console.log(generatorObject.next());
