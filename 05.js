//There is one subtlety with this form of function definition.
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
//Arrow functions
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

const square1 = (x) => { return x * x; };
const square2 = x => x * x;
const horn = () => {
  console.log("Toot");
};
//Arrow functions were added in 2015, mostly to make it possible to write small function expressions in a less verbose way.
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

