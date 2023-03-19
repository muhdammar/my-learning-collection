//2 news data structure in es6 which set and map
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

console.log(map);
//get value
console.log(map.get(1));

map.set(4, "four");
console.log(map);
//key can be any value
const object = { 2: "two", 3: "three" };
map.set(1, "one");
object[1] = "one";
object[1] = "zero";
console.log("map", map);
console.log("object", object);

//map is iterable
map.forEach((value, key) => {
  console.log(`${key}-${value}`);
});

//example in shopping cart
const cart = new Map();
const shoe = {
  id: 1,
  name: "Shoe",
  price: 10,
};
const shirt = {
  id: 2,
  name: "Shirt",
  price: 200,
};
function addToCart(item) {
  if (cart.has(item.id)) {
    const cartItem = cart.get(item.id);
    cartItem.quantity++;
  } else {
    //add quantity attribute if product not has in the cart yet
    cart.set(item.id, { ...item, quantity: 1 });
  }
}
function deleteFromCart(item) {
  if (cart.get(item.id).quantity > 1) {
    const cartItem = cart.get(item.id);
    cartItem.quantity--;
  } else {
    cart.delete(item.id);
  }
}
addToCart(shoe);
addToCart(shoe);
addToCart(shirt);

deleteFromCart(shoe);
//console.log(cart.values());

//cart.values return the array (map iterator)
for (let item of cart.values()) {
  console.log(item);
}

console.log("Shoes in cart: ", cart.get(shoe.id).quantity);
console.log("Items in cart: ", cart.size);

//set
//can help to remove duplicate value
const set = new Set([1, 1, 2, 2, 2, 3, 4, 5]); //duplicate element will be removed
console.log(set);

const memberCountries = ["DE", "MY", "INR", "MY"];
const countriesSet = new Set(memberCountries);
const uniqueCountries = [...countriesSet]; //desctructuring the set into array
//const uniqueCountries = [countriesSet]; //this not work
countriesSet.add("IT");
console.log("countriesSet", countriesSet);
console.log("uniqueCountries", uniqueCountries);

//to loop
countriesSet.forEach((value) => console.log(value));
countriesSet.clear(); //clear all

//conclusion array is better performance, set is great when use to remove duplicate values
