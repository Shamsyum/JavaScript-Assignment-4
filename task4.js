var email = prompt("Enter email address:");
var validEmail = false
while(validEmail == false){
email = prompt("Enter a valid Email");

for(var i=0; i<email.length; i++){
    if(email[i] === "@"){
        for(var j=email.indexOf("@"); j<email.length; j++){
            if(email[j] === "."){
                validEmail = true;
            }
        }
    }
}

}

alert("Correct Email");