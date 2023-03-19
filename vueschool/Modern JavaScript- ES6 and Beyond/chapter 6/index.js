//topic: Learn which Object Methods was added in ES6 JavaScript
const name = { firstName: "Ammar" };
const auth = { email: "ammar@gmail.com", password: "123" };
const data = Object.assign(name, auth); //combine
console.log(data); //pass by referenced
console.log(name); //pass by referenced
console.log(auth);
const dataWithNewObject = { ...data, ...auth }; //combine
console.log(dataWithNewObject);

const person = {
  name: "Lydia",
  info: {
    country: "NL",
  },
};

const newPerson = Object.assign({}, person);
newPerson.name = "Ammar";
newPerson.info.country = "INDON"; //problem here all object is pass by referenced => get INDON
//deep clone need to use library
console.log("newPerson", newPerson);
console.log("person", person);

const deliveryInfo = {
  street: "Jalan Bukit Beruang",
  postalCode: "12314",
  city: "Dengkil",
};

//get keys
console.log(Object.keys(deliveryInfo));
console.log(Object.values(deliveryInfo));
const includesState = Object.keys(deliveryInfo).includes("street"); //return boolean
const state = includesState ? deliveryInfo.street : "CA";
console.log(state);

//other example
console.log(Object.entries(deliveryInfo)); //return array to sub arrays

//convert into map
const deliveryInfoMap = new Map(Object.entries(deliveryInfo));
console.log(deliveryInfoMap);

//use when necessary, dont complicate things
Object.entries(deliveryInfo).forEach((field) => {
  const [key, value] = field;
  console.log(`${key.padEnd(10)} ${value}`);
});
