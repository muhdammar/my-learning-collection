// What is symbols in JavaScript?
// ES6 introduced a new datatype called Symbols. Symbols are a very powerful feature
//that allows us to mitigate the risk of name collisions, typically in plugins and libraries.
//if u are an library author, symbol is very useful

const shape = {
  radius: 10,
};

function libraryOne(obj) {
  //add specialBehaviour to obj
  obj.specialBehaviour = "Library one!";
}

function libraryTwo(obj) {
  //add specialBehaviour as function to obj
  obj.specialBehaviour = function () {
    return "Library two!";
  };
}

libraryOne(shape);
console.log(shape);
//this will override the specialBehaviour to function
libraryTwo(shape);
console.log(shape);

//new way
const randomString = Math.random().toString(36);
const randomString2 = Math.random().toString(36);
const shape2 = {
  radius: 10,
};

function libraryOne1(obj) {
  //add specialBehaviour to obj
  obj[randomString] = "Library one!";
}

function libraryTwo1(obj) {
  //add specialBehaviour as function to obj
  obj[randomString2] = function () {
    return "Library two!";
  };
}

libraryOne1(shape2); //random key will added here, so no override
console.log(shape2);
libraryTwo1(shape2); //random key will added here, so no override
console.log(shape2);

//Symbol() come to help
//it entirely unique
const mySymbol = Symbol("test");
console.log(mySymbol);

function libraryOne2(obj) {
  //add specialBehaviour to obj
  obj[Symbol("specialBehavior")] = "Library one!";
}

function libraryTwo2(obj) {
  //add specialBehaviour as function to obj
  obj[Symbol("specialBehavior")] = function () {
    return "Library two!";
  };
}
const shape3 = {
  radius: 10,
};

libraryOne2(shape3); //random key will added here, so no override
console.log(shape3);
libraryTwo2(shape3); //random key will added here, so no override
console.log(shape3);
console.log(Object.getOwnPropertySymbols(shape3)); ///get symbol as array
const sym = Object.getOwnPropertySymbols(shape3).find(
  (s) => String(s) === "Symbol(specialBehavior)"
); //find symbol
console.log(shape3[sym]);
//benda ni leceh sikit
