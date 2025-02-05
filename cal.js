let currentInput = '';
let operator = '';
let firstValue = null;

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function setOperator(op) {
  if (firstValue === null) {
    firstValue = parseFloat(currentInput);
    currentInput = '';
    operator = op;
    document.getElementById('display').value = '';
  }
}

function clearDisplay() {
  currentInput = '';
  firstValue = null;
  operator = '';
  document.getElementById('display').value = '';
}

function calculate() {
  if (firstValue !== null && currentInput !== '') {
    const secondValue = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case '*':
        result = firstValue * secondValue;
        break;
      case '/':
        if (secondValue !== 0) {
          result = firstValue / secondValue;
        } else {
          result = 'Error';
        }
        break;
    }

    document.getElementById('display').value = result;
    currentInput = result.toString();
    firstValue = null;
    operator = '';
  }
}
