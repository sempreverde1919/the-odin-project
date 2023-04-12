let num1=0, num2=0, operator, solution, displayValue;

const numBtns = document.querySelectorAll(".number");
const opBtns = document.querySelectorAll(".operator");
const equalBtn = document.querySelector("#equal");
const display = document.querySelector(".display");

function add(num1, num2){
    return num1+num2
};

function subtract(num1, num2){
    return num1-num2
};

function multiply(num1, num2){
    return num1*num2
};

function divide(num1, num2) {
    return num1/num2
}

function operate(num1, operator, num2){
    switch(operator){
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
            console.log("No such oparation")
    }
}

numBtns.forEach(btn => btn.addEventListener("click", (e)=>{
    display.textContent += e.target.value.toString();
    displayValue = display.textContent;
}));

opBtns.forEach(btn=> btn.addEventListener("click", (e)=>{
    num1 = +displayValue;
    operator = e.target.value;
    displayValue = operate(num1, operator, num2);
    display.textContent = displayValue;
}));

equalBtn.addEventListener("click", (e)=>{
    num2 = +displayValue;
    displayValue = operate(num1, operator, num2);
    display.textContent = displayValue;
})