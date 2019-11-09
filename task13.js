var rightNow = new Date();

var miliSince = rightNow.getTime();
var minutesSince = rightNow.getTime()/60000;

console.log("Elapsed milliseconds since January 1, 1970: " + miliSince);
console.log("Elapsed Minutes since January 1, 1970: " + minutesSince);