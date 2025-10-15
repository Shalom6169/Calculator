function appendNumber(number) {
  document.getElementById('result').value += number;
}

function appendOperator(operator) {
  document.getElementById('result').value += operator;
}

function calculateResult() {
  let result = eval(document.getElementById('result').value);
  document.getElementById('result').value = result;
}

function clearScreen() {
  document.getElementById('result').value = '';
}

function deleteLast() {
  let result = document.getElementById('result').value;
  document.getElementById('result').value = result.slice(0, -1);
}
