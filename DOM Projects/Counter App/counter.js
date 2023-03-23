const counterEl = document.getElementById("counter");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const resetBtn = document.getElementById("reset-btn");

let count = 0;

addBtn.addEventListener("click", () => {
  count++;
  counterEl.innerText = count;
});

subtractBtn.addEventListener("click", () => {
  count--;
  counterEl.innerText = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterEl.innerText = count;
});
