//The break statement breaks the loop and continues executing the code after the loop (if any):

//The break statement, without a label reference, can only be used to jump out of a loop or a switch.
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
console.log(text);
//The continue statement (with or without a label reference) can only be used to skip one loop iteration.

//he continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
console.log(text);
//With a label reference, the break statement can be used to jump out of any code block:

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}
console.log(text);
