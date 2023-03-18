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

const clone = <Type>(value: Type): Type => {
  const json = JSON.stringify(value);
  return JSON.parse(json);
};

const myClone = clone(me);
myClone;

//continue esok at 20 episode
