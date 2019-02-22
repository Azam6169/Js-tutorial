	
//The data type of NaN is number
//The data type of an array is object
//The data type of a date is object
//The data type of null is object
//The data type of an undefined variable is undefined *
//The data type of a variable that has not been assigned a value is also undefined *

//The constructor property returns the constructor function for all JavaScript variables.

console.log(typeof "john"); 
 console.log( typeof 3.14); 
 console.log( typeof NaN );
 console.log( typeof false); 
console.log( typeof [1,2,3,4]); 
console.log( typeof {name:'john', age:34}); 
console.log( typeof new Date()); 
console.log( typeof function () {}); 
console.log( typeof myCar); 
console.log(typeof null);

console.log("John".constructor);                // Returns function String()  {[native code]}
console.log((3.14).constructor);                // Returns function Number()  {[native code]}
console.log(false.constructor);                 // Returns function Boolean() {[native code]}
console.log([1,2,3,4].constructor);             // Returns function Array()   {[native code]}
console.log({name:'John',age:34}.constructor);  // Returns function Object()  {[native code]}
console.log(new Date().constructor);            // Returns function Date()    {[native code]}
console.log(function () {}.constructor);        // Returns function Function(){[native code]}

//In JavaScript, the thing called this is the object that "owns" the code. The value of this , when used in an object, is the object itself. In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
//This "home made" isArray() function returns true when used on an array:
//You can check the constructor property to find out if an object is an Array (contains the word "Array"):

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log( isArray(fruits));

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
//Or even simpler, you can check if the object is an Array function:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log( isArray(fruits));

function isArray(myArray) {
  return myArray.constructor === Array;
}


//You can check the constructor property to find out if an object is a Date (contains the word "Date"):

var myDate = new Date();
console.log( isDate(myDate));

function isDate(myDate) {
  return myDate.constructor.toString().indexOf("Date") > -1;
}

var myDate = new Date();
console.log( isDate(myDate));

function isDate(myDate) {
  return myDate.constructor === Date;
}


//The toString() method converts a number to a string.

var x = 123;
console.log(x.toString());
console.log((123).toString());
console.log((100+23).toString());
console.log(false.toString());
console.log(true.toString());
console.log(Date().toString());
//The global method String() can convert dates to strings.
//The global method Number() can be used to convert dates to numbers.


d = new Date();
console.log(Number(d));
console.log(false);

console.log("3.14");
console.log(" ");
console.log("99 88");

d = new Date();
console.log(d.getTime());  
console.log(5 + null);
console.log("5" + null);
console.log("5"-2);
