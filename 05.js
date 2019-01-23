
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
//local bindings 
function wrapValue(n) {
  let local = n;
  return () => local;
}


//Closure:

//The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question.
//It defines a function, wrapValue, that creates a local binding. It then returns a function that accesses and returns this local binding.
//In the example, multiplier is called and creates an environment in which its factor parameter is bound to 2. The function value it returns, which is stored in twice, remembers this environment. So when that is called, it multiplies its argument by 2.
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
// A function that references bindings from local scopes around it is called a closure.
//Recursion
//A function that calls itself is called recursive. Recursion allows some functions to be written in a different style.
/*function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));*/
// → 8
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;
