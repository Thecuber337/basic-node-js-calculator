const prompt = require("prompt-sync")({ sigint: true });
function calc(a, b, func){
    switch(func){
        case 1:
            console.log("Sum: "+(a+b))
            break;
        case 2:
            console.log("Difference: "+(a-b))
            break;
        case 3:
            console.log("Product: "+(a*b))
            break;
        case 4:
            console.log("Quotient: "+(a/b))
            console.log("Remainder: "+(a%b))
            break;
        default: 
        console.log("Please Choose a correct option!")
    }
}

var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter Second number: ");
console.log("1.add\n2.subtract\n3.Multiply\n4.Subtract");
var func = prompt("Choose a function: ");

calc(parseInt(num1),parseInt(num2),parseInt(func));