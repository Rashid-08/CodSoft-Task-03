let display = document.getElementById('display');
let operation = null;
let firstNumber = '';
let secondNumber = '';
let resultShown = false;

function appendNumber(number) {
    if (resultShown) {
        display.value = number;
        resultShown = false;
    } else {
        display.value += number;
    }

    if (!operation) {
        firstNumber += number;
    } else {
        secondNumber += number;
    }
}

function setOperation(op) {
    if (!operation && display.value !== '') {
        operation = op;
        display.value += op;
    }
}

function calculateResult() {
    if (operation && secondNumber !== '') {
        switch (operation) {
            case '+':
                display.value = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                display.value = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                display.value = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                display.value = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }
        resultShown = true;
        firstNumber = display.value;
        secondNumber = '';
        operation = null;
    }
}

function clearDisplay() {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    operation = null;
    resultShown = false;
}