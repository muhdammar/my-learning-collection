//JavaScript is a synchronous,
//single-threaded and blocking language

const sayHi = () => console.log("Hello there");
const askAboutDay = () => console.log("How was your day");
const sayBye = () => console.log("See you later");

sayHi();
askAboutDay();
sayBye();

//imagine u running a api and return 10 second later, so which function run first?
//we want to make asyncrounous function => run in background like timeout function

//Promise come as hero to solve this

const promiseToWalkCat = new Promise((resolve, reject) => {
  //resolve is callback function once we done the task we promised to do
  //reject is callback function once we didnt done the task we promised to do
  let hasWalkedCat = true;
  if (hasWalkedCat) {
    resolve("yes melur is walked");
  } else {
    reject("no, melur is not walked");
  }
});
promiseToWalkCat.then(
  (fromResolve) => {
    console.log("Did melur walked?", fromResolve);
  },
  (fromReject) => {
    console.log("Did melur walked?", fromReject);
  }
);

//more clean way
promiseToWalkCat
  .then((fromResolve) => {
    console.log("Did melur walked?", fromResolve);
  })
  .catch((fromReject) => {
    console.log("Did melur walked?", fromReject);
  });

console.log(new Promise((res, rej) => {}));
console.log(new Promise((res, rej) => res("yes truee")));
//console.log(new Promise((res, rej) => rej("opps error")));

//other example
//this not working except in browser
// function loadImage(url) {
//   return new Promise((res, rej) => {
//     const request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.onload = function () {
//       if (request.status === 200) {
//         res(request.response);
//       } else {
//         rej("Error" + request.statusText);
//       }
//     };
//     request.send();
//   });
// }

// loadImage("https://dog.ceo/api/breeds/image/random");

//other example
let cookFood = () => {
  return new Promise((res) => {
    res("i cooked");
  });
};

let washTyre = () => {
  return new Promise((res, rej) => {
    res("i did wash tyre - adam loll");
    //rej("i didnt wash tyre - adam loll");
  });
};

let coding = () => {
  return new Promise((res) => {
    res("i code javascript");
  });
};

//way 1
// coding()
//   .then(() => cookFood())
//   .then(() => washTyre())
//   .then(() => console.log("all finish"));

//way 2
//keep in mind this might be run in parallel or sequence.
Promise.all([coding(), washTyre(), cookFood()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//other example - use promise resolve
//promise.resolve is useful when we use third party library since we dont know they use promise or not
const myPromise = new Promise((res) => {
  res("im promise");
});
const name = "ammar";
Promise.resolve(myPromise).then((res) => console.log(res));
Promise.resolve(name).then((res) => console.log(res));

myPromise.then((res) => console.log(res));
name.then((res) => console.log(res)); //throw an error since it not a function, safe approach use promise resolve
