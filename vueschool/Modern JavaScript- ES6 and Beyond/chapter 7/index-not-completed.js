//topic: Number Methods
Number.isNaN();
//isNaN means is not a number
//this global method is older way
console.log(isNaN(5)); //false
console.log(isNaN("Lydia")); //true
console.log(isNaN(NaN)); //true

//new method
console.log(Number.isNaN(5)); //false
console.log(Number.isNaN("Lydia")); //false
console.log(Number.isNaN(NaN)); //true

//tak faham sangat, nanti ah tanya chat gpt

console.log(isFinite(5)); //true
console.log(isFinite("0")); //true
console.log(isFinite("dsa")); //false

console.log("Number.isFinite", Number.isFinite(5)); //true
console.log("Number.isFinite", Number.isFinite("0")); //false

//Math.trunc
//accept string
console.log(Math.trunc(12.345)); //12
console.log(Math.trunc("12.345")); //12
console.log(Math.trunc("dasdas")); //nan

console.log(parseInt(80.23)); //80
console.log(parseInt("80.23")); //80

//math.trunc is more performant
