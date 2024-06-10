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

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        display.style.color = "white";
        num1 += digit.textContent;
        display.textContent = num1;
    }) 
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        console.log(operator.textContent);
    })
})

backArrow.addEventListener("click", () => {
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
})
