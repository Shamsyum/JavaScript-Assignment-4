var input = prompt("enter num");
var sum = 0;
for(var i=0; i<input.length; i++){
    sum = sum + parseInt(input[i])
}

var mean = sum / input.length;
alert("The mean of the Number "+ input + " is "+ mean);