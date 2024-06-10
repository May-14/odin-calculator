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


let num1 = 0;
let operator = "+";
let num2 = 0;

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

digits.forEach(digit => {
    digit.addEventListener("click", () => {
        console.log(digit.textContent);
    }) 
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        console.log(operator.textContent);
    })
})
