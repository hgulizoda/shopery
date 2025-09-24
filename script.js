document.querySelectorAll(".count").forEach((counter) => {
  const number = counter.querySelector(".county");
  const plus = counter.querySelector(".plus");
  const minus = counter.querySelector(".minus");

  let value = 0;

  plus.addEventListener("click", () => {
    value++;
    number.textContent = value;
  });

  minus.addEventListener("click", () => {
    if (value > 0) value--;
    number.textContent = value;
  });
});

let main = document.getElementById("main");

document.getElementById("img1").onclick = function () {
  main.src = "./assets/images/cabbage2.jpg";
};

document.getElementById("img2").onclick = function () {
  main.src = "./assets/images/cabbagelaying.jpg";
};

document.getElementById("img3").onclick = function () {
  main.src = "./assets/images/bell pepper.png";
};
document.getElementById("img4").onclick = function () {
  main.src = "./assets/images/flower.png";
};

const descBtn = document.getElementById("description");
const addiBtn = document.getElementById("infos");
const feedBtn = document.getElementById("feedback");
const descTable = document.getElementById("describe");
const infoTable = document.getElementById("additional");
const comTable = document.getElementById("comments");
const right = document.getElementById("right");
descBtn.onclick = function () {
  descTable.style.display = "flex";
  infoTable.style.display = "none";
  comTable.style.display = "none";
  right.style.display = "block";
};

addiBtn.onclick = function () {
  descTable.style.display = "none";
  infoTable.style.display = "block";
  comTable.style.display = "none";
  right.style.display = "block";
};

feedBtn.onclick = function () {
  descTable.style.display = "none";
  infoTable.style.display = "none";
  comTable.style.display = "block";
  right.style.display = "none";
};
