let count = 0;

const counterDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

function updateDisplay() {
  counterDisplay.textContent = count;
}

incrementBtn.addEventListener('click', () => {
  count += 1;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  count -= 1;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});