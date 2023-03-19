"use strict";
//type assertions
Object.defineProperty(exports, "__esModule", { value: true });
//const theCanvas = document.getElementById("test") as HTMLCanvasElement;
function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$".concat(netPrice) : netPrice;
}
var netPrice = getNetPrice(10, 0.2, false);
var netPrice2 = getNetPrice(10, 0.2, true);
console.log(netPrice);
console.log(netPrice2);
//it run in compile time, so no error checking in runtime
//no exception if exception is throw -> tah tak faham aku
//the unknown type in typescript
function getNetPriceV2(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$".concat(netPrice) : netPrice;
}
//ts will ask u what the assertion type, otherwise error because of unknown method type
//let netPrice3 = getNetPriceV2(10, 0.2, true) as number;
//netPrice3.startsWith("$"); //error here
//no error here
var netPrice3 = getNetPriceV2(10, 0.2, true);
netPrice3.startsWith("$"); //error here
var me = {
    name: "Ammar",
    age: 34,
};
//<type> untuk declare type dia
var clone = function (value) {
    var json = JSON.stringify(value);
    return JSON.parse(json);
};
var cloneV2 = function (value) {
    var json = JSON.stringify(value);
    return JSON.parse(json);
};
var test = "dasda";
var myClone = clone(me);
var secondClone = cloneV2(test);
console.log(secondClone);
myClone;
var books = ["test book"];
//what the different between this 2?
//the different is, first is assertion type that checking in runtime,
//second is checking at compile time (safer approach)
var copiesBook = clone(books);
var copiesBookv2 = clone(books);
//advanced narrowing
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
    }
    return Company;
}());
var PersonV2 = /** @class */ (function () {
    function PersonV2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return PersonV2;
}());
function greet(entity) {
    if (entity instanceof PersonV2) {
        console.log("Hello ".concat(entity.firstName, " ").concat(entity.lastName));
    }
    else {
        console.log("Hello ".concat(entity.name));
    }
}
greet(new PersonV2("test", "testlastname"));
function greetV2(entity) {
    if ("firstName" in entity) {
        console.log("Hello ".concat(entity.firstName, " ").concat(entity.lastName));
    }
    else {
        console.log("Hello ".concat(entity.name));
    }
}
//this lead to undefined because greet is for class, this parameter put for interface
//this greet for class
greet({ firstName: "Amar", lastName: "Aziz" });
//this is the correct one
greetV2({ firstName: "Amar", lastName: "Aziz" });
var module_1 = require("./module");
(0, module_1.default)();
