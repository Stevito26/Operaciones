let currentInput = '';
let operator = '';
let firstNumber = '';

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    operator = '';
    firstNumber = '';
    document.getElementById('result').value = '';
}

function doOperation(op) {
    if (currentInput !== '') {
        if (firstNumber === '') {
            firstNumber = currentInput;
            currentInput = '';
        } else {
            calculateResult();
        }
        operator = op;
    }
}

function calculateResult() {
    if (currentInput !== '') {
        let secondNumber = currentInput;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                if (secondNumber === '0') {
                    alert("No se puede dividir por cero.");
                    clearResult();
                    return;
                }
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }
        clearResult();
        document.getElementById('result').value = result;
        firstNumber = result;
        currentInput = '';
    }
}

