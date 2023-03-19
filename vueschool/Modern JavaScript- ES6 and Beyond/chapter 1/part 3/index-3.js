//topic : Learn what ES6 modules are and how to export and import them
//in es5, using module.exports = sum, and use require() to import
// const sumEs5 = require("./sum-es5.js");
// console.log(sumEs5(1, 4));

//in es6, we can use export and import modules
import { sum, subtract as tolak } from "./sum.js";
console.log(sum(1, 12));
console.log(tolak(1, 12));

//other example
import { subtractV2 } from "./sum-v2.js";
console.log(subtractV2(1, 12));

//other example
import * as calculatorr from "./sum.js"; //effect performance since it import all
console.log(calculatorr.sum(1, 12));

//other example
import apa2namaPunBoleh, { subtract } from "./sum-v3.js"; //ni akan import default function
import apa2namaPunBoleh2, * as kira2 from "./sum-v3.js"; //ni akan import default function
console.log(apa2namaPunBoleh(1, 12));
console.log(kira2.subtract(1, 12));

//topic: Learn how to create Classes in JavaScript (ES6)
class User {
  constructor(firstName, lastName) {
    (this.namaPertama = firstName), (this.lastName = lastName);
  }
  getFullname() {
    return "Yes ni function";
  }
}

const admin = new User("ammar", "aziz");

console.log(admin.getFullname());

class Admin extends User {
  constructor(firstName, lastName) {
    //this.role = "admin";//cant call before super(), it will throw an error

    super(firstName, lastName); //this is mandatory
    this.role = "admin";
  }
}
const newAdmin = new Admin("ammar", "aziz");
console.log(newAdmin);
