let greeting = "test";
//greeting = 2; //typescript not happy

//implicit
let number = 2;
number = 2;

//explicit
let myNumber: number = 2;

//array in ts
const books: number[] = [1];
books[0] = 2;

//function
function sumDynamic(x, y) {
  return x + y;
}

function sum(x: number, y) {
  return x + y;
}

sumDynamic(1, "2");
console.log(sumDynamic(1, "2"));
console.log(sum(1, "2"));

//union type
let booleanOrString: string | boolean = "test string";
booleanOrString = true;

function printId(id: number | string) {
  if (typeof id === "string") console.log(id.toUpperCase());
}

//literal type + union type
function setSomething(size: "small" | "medium") {}

setSomething("small");

//type aliases

type Size = "S" | "X";
function setSomethingA(size: Size) {}

type Product = {
  name: string;
  price: number;
};

const tshirt: Product = {
  name: "Title",
  price: 2,
};

//interfaces
//the different between interface and
//type is interface we can add new attribute at other interfaces
// while type cant
interface IProduct {
  name: string;
  price: number;
}

interface IProduct {
  newName?: string;
}

const tshirt2: IProduct = {
  name: "Title",
  price: 2,
};

//extending interfaces
interface InventoryItem {
  name: string;
  price: number;
}

interface Service extends InventoryItem {
  startTime: Date;
  endTime: Date;
}

interface InterfaceProduct extends InventoryItem {
  color?: string;
}

const photoShoot: Service = {
  //error at here -> missing
  //cuba buang salah satu, mesti dapat error
  name: "test name",
  startTime: new Date("May 9, 2009 11:00:00"),
  endTime: new Date("May 9, 2009 11:00:00"),
  price: 11,
};

//using interfaces in typescript
function purchaseItem(item: InventoryItem): InventoryItem {
  console.log(item);
  return item;
}
purchaseItem({ price: 123, name: "things" });
purchaseItem(photoShoot);

//enum in typescript
enum SizesEnum {
  small, //0
  medium, //1
  large, //2
}

//another
enum SizesEnum2 {
  medium, //1
  large, //2
  small = "small",
}

console.log(SizesEnum2);
