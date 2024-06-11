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
let operator = "+";
let num2 = "";
let answer = "0";

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

console.log(operate(num1, num2, operator));

let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let backArrow = document.querySelector(".back-arrow");
let display = document.querySelector(".display span");
let operationToDo = "add";
let numberBeingEntered = "num1";
let equalSign = document.querySelector(".equal");
let clearButton = document.querySelector(".clear-button");
let decimal = document.querySelector(".decimal")

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (digit.textContent === "." && (numberBeingEntered === "num1" ? num1.includes(".") : num2.includes("."))) {

        } else {
            if(digit.textContent === "." && num1.length === 0 ){
                num1 = "0";
            }
            if (numberBeingEntered === "num1") {
                display.style.color = "white";
                if (num1.length < 10) {
                    num1 += digit.textContent;
                }
                display.textContent = num1;
            } else {
                if( digit.textContent === "." && num2.length === 0 ){
                    num2 = 0;
                }
                display.style.color = "white";
                if (num2.length < 10) {
                    num2 += digit.textContent;
                }
                display.textContent = num2;
            }
        }
    }) 
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        switch (operator.textContent) {
            case "+":
                operationToDo = "addition"
                break;
            case "-":
                operationToDo = "subtraction"
                break;
            case "÷":
                operationToDo = "division"
                break;
            case "x":
                operationToDo = "multiplication"
                break;
        }
        num2 = "";
        display.textContent = "0000000000";
        display.style.color = "rgb(176, 209, 221)";
        numberBeingEntered = "num2";
    })
})

backArrow.addEventListener("click", () => {
    if (numberBeingEntered === "num1") {
        if (num1.length < 2) {
            num1 = "";
            display.style.color = "rgb(176, 209, 221)";
            display.textContent = "0000000000";
        } else {
            let arrayOfNum1 = num1.split("");
            arrayOfNum1.pop();
            num1 = arrayOfNum1.join("");
            display.textContent = num1;
        }
    } else if (numberBeingEntered === "num2") {
        if (num2.length < 2) {
            num2 = "";
            display.style.color = "rgb(176, 209, 221)";
            display.textContent = "0000000000";
        } else {
            let arrayOfNum2 = num2.split("");
            arrayOfNum2.pop();
            num2 = arrayOfNum2.join("");
            display.textContent = num2;
        }
    }
})

function calculateResult() {
    if (numberBeingEntered === "num2") {
        num1 = +num1;
        num2 = +num2;
        switch (operationToDo) {
            case "addition":
                answer = add(num1, num2);
                break;
            case "subtraction":
                answer = subtract(num1, num2);
                break;
            case "multiplication":
                answer = multiply(num1, num2);
                break;
            case "division":
                answer = divide(num1, num2);
                break;
        }
        answerInStringForm = answer.toString();
        if (answerInStringForm.length > 10) {
            answerInStringForm = answerInStringForm.split("");
            answerInStringForm.splice(11,answerInStringForm.length - 11);
            let lastNumber = answerInStringForm.pop();
            answerInStringForm = answerInStringForm.join("");
            console.log(answerInStringForm);
            if (lastNumber > 4) {
                answer = +answerInStringForm + 0.00000001
            } else {
                answer = +answerInStringForm;
            }
        }
        display.textContent = answer;
        if (answer === "Error") {
            answer = 0;
        }
        num1 = answer;
        answer = "";
        num2 = "";
        numberBeingEntered = "num2";
    }
}

equalSign.addEventListener("click", calculateResult)

clearButton.addEventListener("click", () => {
    num1 = "";
    operator = "+";
    num2 = "";
    answer = "0";
    operationToDo = "add";
    numberBeingEntered = "num1";
    display.style.color = "rgb(176, 209, 221)";
    display.textContent = "0000000000";
})