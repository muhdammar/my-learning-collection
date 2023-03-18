//type assertions
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
