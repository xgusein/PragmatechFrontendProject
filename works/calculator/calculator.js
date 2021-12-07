const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingForSeconndValue = false;

updateDisplay()

function updateDisplay() {
    display.value = displayValue;
}

keys.addEventListener('click', function (e) {
    const element = e.target;
    const value = element.value;

    if (!element.matches('button')) return;

    switch(value) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value);
            break;
        case '.':
            inputDecimal(value);
        case 'clear':
            clear();
            break;
        default:
            inputNumber(element.value);        
    }





    // if (element.classList.contains('operator')) {
    //     // console.log('operator',element.value);
    //     handleOperator(element.value);
    //     updateDisplay();
    //     return;
    // }

    // if (element.classList.contains('decimal')) {
    //     // console.log('decimal',element.value);
    //     inputDecimal(element.value);
    //     updateDisplay();
    //     return;
    // }

    // if (element.classList.contains('clear')) {
    //     // console.log('clear',element.value);
    //     clear();
    //     updateDisplay();
    //     return;
    // }

    // console.log('number', element.value);
    // inputNumber(element.value);
    updateDisplay();
});

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);

    if(operator && waitingForSeconndValue){
        operator = nextOperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;
    } else if (operator) {
        const result = calculate(firstValue, value, operator);

        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;

    };

    waitingForSeconndValue = true;
    operator = nextOperator;

    console.log(displayValue, firstValue, operator, waitingForSeconndValue);
}

function calculate(first, second, operator) {
    if (operator === '+') {
        return first + second;
    } else if (operator === '-') {
        return first - second;
    } else if (operator === '*') {
        return first * second;
    } else if (operator === '/') {
        return first / second;
    }

    return second;
}

function inputNumber(num) {
    if (waitingForSeconndValue) {
        displayValue = num;
        waitingForSeconndValue = false;
    } else {
        displayValue = displayValue === '0' ? num : displayValue + num;
    }
    console.log(displayValue, firstValue, operator, waitingForSeconndValue);
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += ',';
    }
}

function clear() {
    displayValue = '0';
}