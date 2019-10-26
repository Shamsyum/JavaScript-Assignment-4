
var city = "Hyderabad";
var newCity = "Islam" + city.slice(city.indexOf("abad"),city.length);
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity);