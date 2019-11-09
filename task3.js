var passward = prompt("Enter passward:");
var validPass = false;

while(validPass == false){
    passward = prompt("Enter a valid passward For character codes of a-z, A-Z & 0-9");

    if(passward.length > 7 && !parseInt(passward[0])){
            for(var i=0; i<passward.length; i++){
                if(parseInt(passward[i])){
                    for(var j=0; j<passward.length; j++){
                        if(typeOf(passward[j]) == "string"){
                            validPass = true;
                        }
                    }
                }
            }
        }
}

alert("wao, valid passward");
