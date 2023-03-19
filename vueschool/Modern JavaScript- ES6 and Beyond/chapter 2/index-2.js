//topic: Learn Async/Await in JavaScript
function myPromiseFunction() {
  return new Promise((res) => res("first"));
}

function firstFunction() {
  myPromiseFunction().then((res) => console.log(res));
  console.log("second");
}

async function secondFunction() {
  console.log(await myPromiseFunction());
  console.log("second");
}
firstFunction(); //this function will run the next line while wait promise to finish
secondFunction(); //this async function will wait before go to the next line

//same function but different syntax
function myFirstFunction() {
  return new Promise((res) => res("it resolved first"));
}

async function mySecondFunction() {
  return "it resolved second";
}
myFirstFunction().then((res) => console.log(res));
mySecondFunction().then((res) => console.log(res));
//other example
async function fetchUser(id) {
  //assume this is fetch module
  const response = new Promise((res, rej) => rej("oops"));
  return await response;
}
fetchUser(1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
