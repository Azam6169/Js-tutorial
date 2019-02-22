	
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

