var greeting = "test";
//greeting = 2; //typescript not happy
//implicit
var number = 2;
number = 2;
//explicit
var myNumber = 2;
//array in ts
var books = [1];
books[0] = 2;
//function
function sumDynamic(x, y) {
    return x + y;
}
function sum(x, y) {
    return x + y;
}
sumDynamic(1, "2");
console.log(sumDynamic(1, "2"));
console.log(sum(1, "2"));
//union type
var booleanOrString = "test string";
booleanOrString = true;
function printId(id) {
    if (typeof id === "string")
        console.log(id.toUpperCase());
}
//literal type + union type
function setSomething(size) { }
setSomething("small");
function setSomethingA(size) { }
var tshirt = {
    name: "Title",
    price: 2,
};
var tshirt2 = {
    name: "Title",
    price: 2,
};
var photoShoot = {
    //error at here -> missing
    //cuba buang salah satu, mesti dapat error
    name: "test name",
    startTime: new Date("May 9, 2009 11:00:00"),
    endTime: new Date("May 9, 2009 11:00:00"),
    price: 11,
};
//using interfaces in typescript
function purchaseItem(item) {
    console.log(item);
    return item;
}
purchaseItem({ price: 123, name: "things" });
purchaseItem(photoShoot);
//enum in typescript
var SizesEnum;
(function (SizesEnum) {
    SizesEnum[SizesEnum["small"] = 0] = "small";
    SizesEnum[SizesEnum["medium"] = 1] = "medium";
    SizesEnum[SizesEnum["large"] = 2] = "large";
})(SizesEnum || (SizesEnum = {}));
//another
var SizesEnum2;
(function (SizesEnum2) {
    SizesEnum2[SizesEnum2["medium"] = 0] = "medium";
    SizesEnum2[SizesEnum2["large"] = 1] = "large";
    SizesEnum2["small"] = "small";
})(SizesEnum2 || (SizesEnum2 = {}));
console.log(SizesEnum2);
