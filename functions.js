// FUNCTION PRACTICE PROBLEMS

// function to return true if a numeric argument is even or false if it is not 
function isEven(i) {
    if(i % 2 === 0) {
        return true;
    }   else {
        return false;
    }
} 

// testing the function 
console.log("* Testing the function isEven() with 4, 7, 346, 67, and 1");
console.log(isEven(4));
console.log(isEven(7));
console.log(isEven(346));
console.log(isEven(67));
console.log(isEven(1));


// function to return the factorial of a numeric argument
function factorial(num) {
    var result = 1;
    for(var i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}
// factorial(4) 4 x 3 x 2 x 1


// function to replace kebab case with snake case
function kebabToSnake(str) {
    var newStr = str.replace(/-/g , "_");
    return newStr;
}


// function that calculates the area of a rectangle
var area = function(x, y) {
   result = x * y;
    return result;
}


//function that accepts a number and multiplies it by 5
function multiplyFive(num) {
    var newNum = num * 5;
    return newNum;
}