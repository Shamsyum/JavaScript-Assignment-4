var str = "the quick brown fox jumps over the lazy dog";
var accurance = 0;
for(var i=0; i<str.length; i++){
    if(str[i] !== str.length-1){
        if(str[i] === str.indexOf("the")){
        accurance++;
        }
    }
}
console.log("There are "+accurance+" accurance of the word 'the'");