const boxContainer = document.getElementById('box-container');
const horizontalBtn = document.getElementById('horizontal-btn');
const verticalBtn = document.getElementById('vertical-btn');

horizontalBtn.addEventListener('click', () => {
  boxContainer.classList.remove('layout-vertical');
  boxContainer.classList.add('layout-horizontal');
});

verticalBtn.addEventListener('click', () => {
  boxContainer.classList.remove('layout-horizontal');
  boxContainer.classList.add('layout-vertical');
});