var age = prompt("Enter your age: ");

var currentTime = new Date();
var birthYear = currentTime.getFullYear()-age;

console.log("Your age is: " + age);
console.log("your birth year is: " + birthYear);
