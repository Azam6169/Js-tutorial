let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105
//The words var and const can also be used to create bindings, in a way similar to let.
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
for(let i=0;i<10;i++){

console.log(i); //i is visible thus is logged in the console as 0,1,2,....,9

}
console.log(i); //throws an error as "i is not defined" because i is not visible
//Block

//let variables are usually used when there is a limited use of those variables. Say, in for loops, while loops or inside the scope of if conditions etc. Basically, where ever the scope of the variable has to be limited.
//var is rather a keyword which defines a variable globally regardless of 
//block scope
for(var i=0; i<10; i++){

console.log(i); //i is visible thus is logged in the console as 0,1,2,....,9

}
console.log(i); //i is visible here too. thus is logged as 10.
//Thus, as you can see the var variable is logged as 10 outside of the for loop too.
//Note: It logged it as 10 because the for loop terminates after checking the incremented value of i.

