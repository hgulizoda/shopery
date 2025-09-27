const shadowModal = document.getElementById("modal-overlay");
// const shadowDrawer = document.getElementById("shadow-drawer");
const modal = document.getElementById("modal-box");
// const drawer = document.getElementById("drawer-box");

const modalBtn = document.getElementById("modal");
const drawerBtn = document.getElementById("cart");
const closeModal = document.getElementById("close-modal");
modalBtn.addEventListener("click", () => {
  shadowModal.style.display = "flex";
  modal.classList.add("openedY");
});

closeModal.addEventListener("click", () => {
  shadowModal.style.display = "none";
});

drawerBtn.addEventListener("click", () => {
  shadowDrawer.style.display = "flex";
  drawer.classList.add("openedX");
});

shadowModal.style.background = "red";
