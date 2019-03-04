
//In JavaScript, regular expressions are often used with the two string methods: search() and replace().
var str = "Visit W3Schools!"; 
var n = str.search("W3Schools");
console.log(n);

 var str ="Please visit Microsoft and Microsoft!"
 
  var txt = str.replace(/microsoft/i,"W3Schools");
 console.log(txt);
 
//Modifiers can be used to perform case-insensitive more global searches:

var p01="The best things in life are free!"
 console.log( /e/.test(p01));

var obj = /e/.exec("The best things in life are free!");
console.log(
"Found " + obj[0]+ " in position " +  obj.index + " in the text: " + obj.input  );
//he exec() method is a RegExp expression method.

//It searches a string for a specified pattern, and returns the found text as an object.

//If no match is found, it returns an empty (null) object.

//The following example searches a string for the character "e": 

var obj = /e/.exec("The best things in life are free!");
console.log(
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input);
