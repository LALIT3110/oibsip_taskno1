let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
    expression = '';
  }
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}
function applyClickEffect(button) {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 100);
}

// Attach event listeners to the calculator buttons
const buttons = document.querySelectorAll('.keypad button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    applyClickEffect(button);
  });
});