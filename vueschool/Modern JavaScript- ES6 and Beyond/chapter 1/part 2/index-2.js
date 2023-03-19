//topic: Learn how to set default parameter values in JavaScript functions

//default value
function greeting(name = "hana") {
  return name;
}

console.log(greeting("ammar"));
console.log(greeting());

//other example
function addListItem(item, list = []) {
  list.push(item);
  return list;
}

console.log(addListItem("banana"));
console.log(addListItem("apple"));
//it will create two new arrays

//it also can pass a function
function logMessage(message, prefix = getSample()) {
  console.log(`${prefix} - ${message}`);
}

function getSample() {
  return "sample bro";
}
logMessage("title");
logMessage("title", "newSample");

//topic: Learn what the Rest and Spread operators are in ES6

//rest parameter must be last parameter, othewise, error
function sum(a, b, ...values) {
  console.log(values);
  let sum = a + b;
  values.forEach((value) => (sum += value));
  return sum;
}

console.log(sum(2, 4));
console.log(sum(2, 4, 4, 12, 231));

//spread operator
const user = { name: "John Doe" };
const cart = {
  item: [{ name: "tshirt", quantity: 10 }],
};
const deliveryAddress = {
  street: "kgg melayu subang",
  city: "Shah Ale",
  state: "Kedah",
};

//use to copies the object
const purchase = {
  ...user,
  ...cart,
  ...deliveryAddress,
};

const purchase2 = {
  user,
  cart,
  deliveryAddress,
};

console.log("spread example", purchase);
console.log("not spread example", purchase2); //different output, this not spread operator

//topic: How to Destructure Arrays and Objects in JavaScript ES6
const person = {
  name: "John doe",
  age: 54,
};

const { name, age } = person; // similar thing as below
const { name: memberName, age: memberAge } = person; //use by different variable name
console.log(name);
console.log(age);
console.log(memberName);
console.log(memberAge);
const name2 = person.name;
const age2 = person.age;
console.log(name2);
console.log(age2);

//destructuring array
const fruit = ["apple", "pisang", "anggur"];
const [satu, dua, tiga] = fruit;
console.log(satu, dua, tiga);

//other example destructuring
let [min, max] = [15, 9];
if (min > max) {
  [min, max] = [max, min];
}
console.log("Min:", min);
console.log("Max:", max);

//other example
const team = [{ name: "elon mas" }, { name: "melur bosku" }];

const [boss, ...employees] = team;
console.log(boss); //return 1 object
console.log(employees); //return array

//other example

const event = {
  name: "my event",
};
const { name: nameEvent, createdAt = new Date() } = event;
console.log(nameEvent, createdAt);

//other example

function getCat({ name }) {
  //kalau salah bagi nama, dia bagi undefined
  console.log("yeah dapat kucing nama ni " + name);
}
const cat = {
  age: 3,
  name: "melur",
};
getCat(cat);
