//string
x='Float on the ocean'
console.log(x);
y="A newline character is written like \"\\n\"."
console.log(y);
z=`half of 100 is ${100/2}`
console.log(z);

//Unary operators
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string

//Boolean values
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
console.log("Aardvark" < "Zoroaster")
// → true
//Other similar operators are >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).
console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false
//There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).
console.log(NaN == NaN)
// → false
//Logical operators
console.log(true && false)
// → false
console.log(true && true)
// → true
console.log(false || true)
// → true
console.log(false || false)
// → false
console.log(1 + 1 == 2 && 10 * 10 > 50)
//ternary, operating on three values. It is written with a question mark and a colon, like this:
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
// the conditional operator (or sometimes just the ternary operator
//The value on the left of the question mark “picks” which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
//Empty values
//Automatic type conversion
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
// it produces true only if both sides are one of null or undefined.
console.log(null == undefined);
// → true
console.log(null == 0);
// → false

console.log(null == undefined);
// → true
console.log(null == 0);
// → false
//when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
//Short-circuiting of logical operators

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
// The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true.
console.log(0 || -1 )
//-1
console.log("" || "!?")
//!?

