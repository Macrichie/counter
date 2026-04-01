// Your job: wire up the buttons and make the counter work
// You have access to these elements:
const countEl = document.getElementById('count');
const btnDec = document.getElementById('btn-dec');
const btnReset = document.getElementById('btn-reset');
const btnInc = document.getElementById('btn-inc');

let count = 0;

// TODO: implement this function
function updateUI() {
  // 1. Update countEl text to show current count
    countEl.textContent = count;
  // 2. Change countEl color: green if positive, red if negative, white if zero
  if (count > 0) {
    countEl.style.color = 'green';
  } else if (count < 0) {
    countEl.style.color = 'red';
  } else {
    countEl.style.color = 'white';
  }
  // 3. Disable btnDec when count is 0
  btnDec.disabled = count === 0;
}

// TODO: add click event listeners to all 3 buttons

btnDec.addEventListener('click', () => {
  count--;
  updateUI();
});

btnReset.addEventListener('click', () => {
  count = 0;
  updateUI();
});

btnInc.addEventListener('click', () => {
  count++;
  updateUI();
});