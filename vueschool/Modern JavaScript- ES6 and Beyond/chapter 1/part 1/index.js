//ES 5 we have var only

//const is for readonly, cannot reassign
const name = "Ammar";
//name = "Aisyah"; //this is wrong

let name2 = "Ammar";
name2 = "Aisyah";

//const, let, and var
//what the different

//const and let is block scoped
//using const and let can prevent initialized error

//var can be access outside block
//var default is undefined

//topic - arrow functions

function getInfo(name, age) {
  return `Name: ${name} -  Age: ${age}`;
}

const getInfo2 = (name, age) => {
  return `Name: ${name} -  Age: ${age}`;
};

//this return 1 statement, no curly bracket
const getInfo3 = (name, age) => `Name: ${name} -  Age: ${age}`;

console.log(getInfo("Ammar", 21));

var global = 5;
const shape = {
  global: 10,
  diameter: function () {
    return this.global * 2;
  },
  diameter2: () => global * 2, //radius refer to global radius
};

//why this function can be call before the function?
//because it in memory
console.log(greeting());
function greeting() {
  return "test";
}

//but if it is a variable, it different stories
//console.log(name4); //error here because it call the variable before the initialize
const name4 = "melur";

//but if it var, it different story, var have default value which undefined
console.log(name5); //error here
var name5 = "ammar";

//here also another usecase
//console.log(greeting2()); //error here because it call the variable before the initialize
const greeting2 = () => "test funtion";
console.log(greeting2());

console.log(shape.diameter());
console.log(shape.diameter2());

//ada some example tak faham sebab dia guna bind apa tah, lesson episod no 3

//topic: es6 template literal and string interpolation
console.log(`Hello there, ${name2}`);
const sum = (a, b) => `Sum: ${a + b}`;
console.log(sum(1, 3));

const greet = (greeting, name, age) => {
  // dia akan ikut urutan, kalau bagi salah urutan, dia akan tunjuk salah
  //contoh salah (greeting, age, name) so name akan jadi 3
  console.log(greeting);
  console.log(name);
  console.log(age);
};

const newName = "Melur baru";
const age = "3";

//baru jumpa sytax ni do lol
greet`My Name is ${newName} and i am ${age} years old`;

//Topic: Learn which features and syntax changes ES6 introduced to JavaScript Objects
function createPerson(name, age, admin) {
  return {
    name: name,
    age: age,
    isAdmin: admin,
  };
}

console.log(createPerson("Ammar", 21, false));

//more shorter way
function createPerson2(name, age, admin) {
  return {
    name, //more short
    age, //more short
    isAdmin: admin,
  };
}
console.log(createPerson2("Ammar", 21, false));

//computed property name
//ES6
const characteristic = "feet";
const animal = {
  name: "Melur",
};

animal[characteristic] = "4"; //add as key
console.log(animal);

//more shorter brooo
const animal2 = {
  name: "Melur",
  [characteristic]: 4,
};
console.log(animal2);

//other example
function makeObject(key, value) {
  //if this -> return { [key]: value };
  //output { key: 'john' }
  return { [key]: value };
}

const user = makeObject("userName", "john");
console.log(user);

//other example for object
const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getFullName());

//more shorter way
//other example for object
const firstName = "ammar boskur";
const lastName = "melur";
const personv2 = {
  firstName,
  lastName,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  [characteristic]: 4,
};
console.log(personv2);
console.log(personv2.getFullName());
