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

const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal-box");
const closeModal = document.getElementById("close-modal");
const modalBtn = document.getElementById("subscribe");
modalBtn.style.cursor = "pointer";
const body = document.getElementById("body");
body.style.height = "100vh";

modalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("openedY");
  modal.classList.add("openedY");
  body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
  modalOverlay.classList.remove("openedY");
  modal.classList.remove("openedY");
  body.style.overflowY = "visible";
});

const drawerOverlay = document.getElementById("drawer-overlay");
const drawer = document.getElementById("drawer-bar");
const closeDrawer = document.getElementById("close-drawer");
const drawerBtn = document.getElementById("cart");
drawerBtn.style.cursor = "pointer";
closeDrawer.style.cursor = "pointer";

drawerBtn.addEventListener("click", () => {
  drawerOverlay.classList.add("openedX");
  drawer.classList.add("openedX");
  body.style.overflow = "hidden";
});

closeDrawer.addEventListener("click", () => {
  drawerOverlay.classList.remove("openedX");
  drawer.classList.remove("openedX");
  body.style.overflowY = "visible";
});
