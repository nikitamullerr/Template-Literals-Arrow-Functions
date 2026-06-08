console.log(`--------------`);
//template literals inndicated by backticks, ``
const name = " Nikita";
const templateLiteral = `Hello ${name} 

Welcome to JavaScript!

Regards, 
Leigh`;

console.log(templateLiteral);

console.log(`--------------`); 
//use a function with template literals for html generation

function menuItem(item, price) {
  return `<div class="menu-item">
  <h2>${item}</h2>
  <p>${price}</p>
  </div>`;
}
const menu = {menuItem: menuItem("Pizza", "R100")};
console.log(menu.menuItem);

console.log(`--------------`);
//arrow functions = a concise way to write functions in JavaScript, simple functionns you use once using the => syntax

const hello = (name, age) => {console.log(`Hello ${name}!`);
                        console.log(`you are ${age} years old`)};

hello ("Nikita", 21);

console.log(`--------------`);
console.log("Example 1");

const arrowFunction = (item, price) => {
  return `<div class="menu-item">
  <h2>${item}</h2>
  <p>${price}</p>
  </div>`;
};
const menuI = {menuItem: menuItem("Pizza", "R100")};
console.log(menuI.menuItem);

console.log("Example 2");
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function version
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3));

console.log(`--------------`);
//arrow functions with arrays

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element,2));
const cubes = numbers.map((element) => Math.pow(element,3));
const evens = numbers.filter((element) => element % 2 === 0);
const odds = numbers.filter((element) => element % 2 !== 0);

console.log(squares);
console.log(cubes);
console.log(evens);
console.log(odds); 

