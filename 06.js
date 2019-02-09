//Use the switch statement to select one of many code blocks to be executed.
//The switch expression is evaluated once.The value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("Today is " + day);
//The getDay() method returns the weekday as a number between 0 and 6.

//If today is neither Saturday (6) nor Sunday (0), write a default message:


switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break; 
  case 0:
    text = "Today is Sunday";
    break; 
  default: 
    text = "Looking forward to the Weekend";
}
console.log(text);

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break; 
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default: 
    text = "Looking forward to the Weekend";
}
console.log(text);
