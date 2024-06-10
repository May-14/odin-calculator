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

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (numberBeingEntered === "num1") {
            display.style.color = "white";
            num1 += digit.textContent;
            display.textContent = num1;
        } else {
            display.style.color = "white";
            num2 += digit.textContent;
            display.textContent = num2;
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
        display.textContent = "0000000000";
        display.style.color = "rgb(176, 209, 221)";
        numberBeingEntered = "num2";
    })
})

backArrow.addEventListener("click", () => {
    if (numberBeingEntered === "num1") {
        if (num1.length === 1) {
            num1 = "";
            display.style.color = "rgb(176, 209, 221)";
            display.textContent = "0000000000";
        } else {
            let arrayOfNum1 = num1.split("");
            arrayOfNum1.pop();
            num1 = arrayOfNum1.join("");
            display.textContent = num1;
        }
    } else {
        if (num2.length === 1) {
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

equalSign.addEventListener("click", () => {
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
    display.textContent = answer;
})