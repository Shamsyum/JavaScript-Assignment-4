var num = prompt("Enter a positive number:");
    while(num<0){
        num = prompt("Enter a positive number:");
    }
    var roundNum = Math.round(num);
    var floorNum = Math.floor(num);
    var cielNum = Math.ceil(num);
    
    console.log("Number: "+num);
    console.log("round of value: "+roundNum);
    console.log("floor value: "+floorNum);
    console.log("ceil value:"+cielNum);
    