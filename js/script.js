// add ans button, and a more reactive display.
// repeating calculations (if i click 2 + 2, then click equals it will give me 4, if i click equal again it should give me six.) 
// Add more indications. Like for example color differently the operator being used. add keywords like ans and stuff like that.


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error";
    }
    return num1 / num2;
}


let num1 = "";
let operator = "";
let num2 = "";
let answer = "";
let completeExpression = "";

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "/":
            return divide(num1, num2);
        case "*":
            return multiply(num1, num2);
    }
}


let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let backArrow = document.querySelector(".back-arrow");
let display = document.querySelector(".display span");
let operationToDo = "add";
let numberBeingEntered = "num1";
let equalSign = document.querySelector(".equal");
let clearButton = document.querySelector(".clear-button");
let decimal = document.querySelector(".decimal")
let additionSymbol = document.querySelector(".addition");
let subtractionSymbol = document.querySelector(".subtraction");
let divisionSymbol = document.querySelector(".division");
let multiplicationSymbol = document.querySelector(".multiplication");

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        display.style.color = "white";
        completeExpression += digit.textContent;
        if (completeExpression.length < 10) {
            display.textContent = completeExpression;
        } else {
            display.textContent = "←" + completeExpression.slice(-9);
        }
    })
})

