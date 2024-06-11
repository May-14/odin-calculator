// give func to ans button
// give func to decimal button
// add arrows to see complete answer
// add keyboard func


function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === "0") {
        return "Error";
    }
    return num1 / num2;
}


let num1 = "";
let operator = "";
let num2 = "";
let answer = "";
let completeExpression = "";

let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let backspaceButton = document.querySelector(".backspace-button");
let display = document.querySelector(".display span");
let operationToDo = "";
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

function clear() {
    completeExpression = "";
    display.textContent = "0000000000";
    display.style.color = "rgb(176, 209, 221)";
}
clearButton.addEventListener("click", clear)

backspaceButton.addEventListener("click", () => {
    if (completeExpression.length > 1) {
        completeExpression = completeExpression.slice(0, -1);
        display.textContent = completeExpression;
        if (completeExpression.length < 10) {
            display.textContent = completeExpression;
        } else {
            display.textContent = "←" + completeExpression.slice(-9);
        }
    } else {
        clear();
    }
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        display.style.color = "white";
        if (completeExpression[completeExpression.length-1] === "+" ||
        completeExpression[completeExpression.length-1] === "-" || 
        completeExpression[completeExpression.length-1] === "x" || 
        completeExpression[completeExpression.length-1] === "÷" 
        ) {
            completeExpression = completeExpression.slice(0, -1)
        }
        if (completeExpression.includes("-") || 
        completeExpression.includes("+") || 
        completeExpression.includes("x") || 
        completeExpression.includes("÷")) {

        } else {
            completeExpression += operator.textContent;
            if (completeExpression.length < 10) {
                display.textContent = completeExpression;
            } else {
                display.textContent = "←" + completeExpression.slice(-9);
            }
        }
    })
})

equalSign.addEventListener("click", () => {
    if (completeExpression.includes("-")) {
        let expressionToEvaluate = completeExpression.split("-");
        answer = subtract(expressionToEvaluate[0], expressionToEvaluate[1])
    } else if (completeExpression.includes("+")){
        let expressionToEvaluate = completeExpression.split("+");
        answer = add(expressionToEvaluate[0], expressionToEvaluate[1])
    } else if (completeExpression.includes("x")) {
        let expressionToEvaluate = completeExpression.split("x");
        answer = multiply(expressionToEvaluate[0], expressionToEvaluate[1])
    } else if (completeExpression.includes("÷")) {
        let expressionToEvaluate = completeExpression.split("÷");
        answer = divide(expressionToEvaluate[0], expressionToEvaluate[1])
    } else {
        answer = completeExpression;
    }
    if (answer.toString().length > 10) {
        display.textContent = answer.toString().slice(0, 9) + "→";
    } else {
        display.textContent = answer;
    }
    if (answer.toString().includes(".")) {
        let numberAndDecimalArray = answer.toString().split(".");
        if (numberAndDecimalArray[1].length > 8) {
            if (+numberAndDecimalArray[1][7] > 4) {
                numberAndDecimalArray[1] = +numberAndDecimalArray[1].slice(0,8) + 1;
            } else {
                numberAndDecimalArray[1] = numberAndDecimalArray[1].slice(0, 8);
            }
            answer = +numberAndDecimalArray.join(".");
            if (answer.toString().length > 10) {
                display.textContent = answer.toString().slice(0, 9) + "→";
            } else {
                display.textContent = answer;
            }
        }
    }
    completeExpression = "";
})