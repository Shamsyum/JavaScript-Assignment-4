function prettyNum(Value, digitsAterPoint){
    var managedNum = Value.toFixed(digitsAterPoint);
    return managedNum;
}


console.log(prettyNum(16.765, 2));
console.log(prettyNum(12.37982, 2));
console.log(prettyNum(-9.3079499, 4));

