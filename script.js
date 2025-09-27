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

modalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("openedY");
  modal.classList.add("openedY");
});

closeModal.addEventListener("click", () => {
  modalOverlay.classList.remove("openedY");
  modal.classList.remove("openedY");
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
});

closeDrawer.addEventListener("click", () => {
  drawerOverlay.classList.remove("openedX");
  drawer.classList.remove("openedX");
});
