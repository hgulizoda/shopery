const number = document.getElementById("county");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let count = 0;

plus.addEventListener("click", () => {
  count++;
  number.textContent = count;
});

minus.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 0;
  }
  number.textContent = count;
});

number.textContent = count;
