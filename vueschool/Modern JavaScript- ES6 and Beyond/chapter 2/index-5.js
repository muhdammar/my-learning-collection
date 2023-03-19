//topic: Learn the new String methods in ES6 JavaScript
const warning = "watch out!";
console.log(warning.repeat(3)); //repeat the string

const url = "https://google.com";
console.log("startsWith", url.startsWith("https://")); //true #check start with if found return true
console.log("endsWith", url.endsWith("1")); //false
console.log("startsWith", url.startsWith("https", 1)); //false
console.log("startsWith", url.startsWith("https", 0)); //true

console.log("includes", url.includes("https")); //true
console.log("includes", url.includes("saya")); //fase
console.log("includes", url.includes("HTTPS")); //false =>case sensitive
const value = "HTTPS";
console.log("includes", url.includes(value.toLowerCase())); //true =>case sensitive

//padStart
const greeting = "Hello World";
console.log(greeting.padStart(21, "x"));

//usecase
const phoneNumber = "1232452313";
const lastTwoDigits = phoneNumber.slice(8, 10);
const hiddenPhoneNumber = lastTwoDigits.padStart(10, "*"); //add star at maximum of 4
console.log(hiddenPhoneNumber);

const members = [
  {
    name: "Ammar",
    point: 10,
  },
  { name: "Hana", point: 10 },
];

//padEnd
members.map(({ name, point }) => {
  console.log(`Name: ${name.padEnd(40)} Point: ${point}`);
});
