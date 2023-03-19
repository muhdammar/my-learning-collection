//type assertions

//const theCanvas = document.getElementById("test") as HTMLCanvasElement;

function getNetPrice(
  price: number,
  discount: number,
  format: boolean
): number | string {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}

let netPrice = getNetPrice(10, 0.2, false) as number;
let netPrice2 = <string>getNetPrice(10, 0.2, true);
console.log(netPrice);
console.log(netPrice2);
//it run in compile time, so no error checking in runtime
//no exception if exception is throw -> tah tak faham aku

//the unknown type in typescript

function getNetPriceV2(
  price: number,
  discount: number,
  format: boolean
): unknown {
  let netPrice = price * (1 - discount);
  return format ? `$${netPrice}` : netPrice;
}
//ts will ask u what the assertion type, otherwise error because of unknown method type
//let netPrice3 = getNetPriceV2(10, 0.2, true) as number;
//netPrice3.startsWith("$"); //error here

//no error here
let netPrice3 = getNetPriceV2(10, 0.2, true) as string;
netPrice3.startsWith("$"); //error here

//generic in typescript
interface Person {
  name: string;
  age: number;
}

const me: Person = {
  name: "Ammar",
  age: 34,
};

//<type> untuk declare type dia
const clone = <Type>(value: Type): Type => {
  const json = JSON.stringify(value);
  return JSON.parse(json);
};

const cloneV2 = <T>(value: T): T => {
  const json = JSON.stringify(value);
  return JSON.parse(json);
};

const test = "dasda";
const myClone = clone(me);
const secondClone = cloneV2(test);
console.log(secondClone);
myClone;

const books: string[] = ["test book"];

//what the different between this 2?
//the different is, first is assertion type that checking in runtime,
//second is checking at compile time (safer approach)
const copiesBook = clone(books) as string[];
const copiesBookv2 = clone<string[]>(books);

//advanced narrowing
class Company {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class PersonV2 {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

function greet(entity: PersonV2 | Company) {
  if (entity instanceof PersonV2) {
    console.log(`Hello ${entity.firstName} ${entity.lastName}`);
  } else {
    console.log(`Hello ${entity.name}`);
  }
}

greet(new PersonV2("test", "testlastname"));

//another way if want to use interface
interface ICompany {
  name: string;
}

interface IPerson {
  firstName: string;
  lastName: string;
}

function greetV2(entity: IPerson | ICompany) {
  if ("firstName" in entity) {
    console.log(`Hello ${entity.firstName} ${entity.lastName}`);
  } else {
    console.log(`Hello ${entity.name}`);
  }
}
//this lead to undefined because greet is for class, this parameter put for interface
//this greet for class
greet({ firstName: "Amar", lastName: "Aziz" });

//this is the correct one
greetV2({ firstName: "Amar", lastName: "Aziz" });

import module from "./module";
module();
