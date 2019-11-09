var currntDate = new Date();
var dateAnHourAgo = new Date();
dateAnHourAgo.setHours(currntDate.getHours()-1);

console.log("Current Date: " + currntDate);
console.log("One hour ago it was: " + dateAnHourAgo );