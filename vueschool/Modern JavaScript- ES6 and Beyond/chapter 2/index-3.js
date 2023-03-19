//ES6 array helper methods

//forEach
//map
//find
//filter
//indexOf
//reduce

const score = [90, 12, 23, 41, 21];
for (const point of score) {
  console.log(`normal loop ${point > 50 ? "Higher than 50" : "Lower than 50"}`);
}

//1# forEach
//it has each callback for the element
//it doesnot modify original value
//big different with for loop
score.forEach((point) => {
  console.log(
    `foreaEach loop ${point > 50 ? "Higher than 50" : "Lower than 50"}`
  );
});

//2# map
//return create new array
//it has callback invoke for each element
const scoreWords = score.map((point) => {
  return point > 50 ? "Higher than 50" : "Lower than 50";
});
console.log(scoreWords);
const decimalNumber = [1.2, 1.2, 2.5, 4.9, 21.7];
const integers = decimalNumber.map((point) => {
  return Math.round(point);
});
console.log(integers);

//3# array filter
//filter array, if it return true, it will added to new array
const products = [
  {
    name: "Melur bosku",
    stock: 1,
  },
  {
    name: "Mawar bosku",
    stock: 2,
  },
  {
    name: "Aboy bosku",
    stock: 0,
  },
];

const productInStocks = products.filter((product) => product.stock > 0);
console.log(productInStocks);

const tasks = [
  {
    name: "Coding bosku",
    done: false,
  },
  {
    name: "Makan bosku",
    done: false,
  },
  {
    name: "Basuh baju bosku",
    done: true,
  },
];

const completed = tasks.filter((task) => task.done);
const unCompleted = tasks.filter((task) => !task.done);
console.log("completed", completed);
console.log("unCompleted", unCompleted);
console.log("allTask", tasks);

//#4 find
//find the first element that return true
const team = [
  {
    name: "ammar",
    gender: "L",
    points: 1,
  },
  {
    name: "aisyah",
    gender: "P",
    points: 12,
  },
  {
    name: "hana",
    gender: "P",
    points: 10,
  },
];

function findTeamMemberByName(name) {
  return team.find((member) => member.name === name);
}
function findTeamMemberByGender(gender) {
  return team.find((member) => member.gender === gender);
}

function findWomenTeamMemberByName(name) {
  const women = team.filter((member) => member.gender === "P");
  return women.find((member) => member.name == name);
}
console.log("findTeamMemberByName", findTeamMemberByName("ammar"));
console.log("findTeamMemberByGender", findTeamMemberByGender("P"));
console.log("findWomenTeamMemberByName", findWomenTeamMemberByName("hana")); //if not find, it return undefined

//#5 indexOf
//find index of array that match the request
//slice is use to separate the array by using index number
const member = team.find((member) => member.name == "hana");
const memberIndex = team.indexOf(member); //if not found, it return -1
console.log(memberIndex);

const firstPart = team.slice(0, memberIndex);
const secondPart = team.slice(memberIndex);
console.log(firstPart);
console.log(secondPart);

//#6 reduce
//use too count the data
let points = team.map((member) => member.points);
console.log(points);
const totalPoints = points.reduce((acc, cur) => acc + cur, 500); //500 is initial value
console.log(totalPoints);

function getSum(list) {
  return list.reduce((acc, cur) => acc + cur, []); //empty as initial value, it return 0 value
}

console.log(getSum([]));

//other example
const members = [
  { name: "Elon Musk", companies: ["tesla", "spaceX"] },
  { name: "Ammar", companies: ["mey empire", "mey drinks"] },
];

const memberCompanies = members.reduce((acc, cur) => {
  console.log(acc);
  return acc.concat(cur.companies);
}, []);
console.log(memberCompanies);

//exercise
const posts = [
  {
    title: "test",
    author: "ammar",
    views: 120,
    langs: ["EN", "MY"],
  },
  {
    title: "test 2",
    author: "hana",
    views: 120,
    langs: ["EN", "MY"],
  },
];

//output single array with languages without any duplicate value
const output = [
  ...new Set(
    posts
      .filter((post) => post.views > 100)
      .map((post) => post.langs)
      .reduce((acc, cur) => acc.concat(cur))
  ),
];

console.log(output);
