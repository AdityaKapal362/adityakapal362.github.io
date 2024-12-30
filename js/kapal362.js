const toolbar = document.getElementById("toolbar");
const myBioSection = document.querySelector(".mybio");
const menuIcon = document.querySelector(".toolbar-menu-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");

document.addEventListener('contextmenu', (event) => event.preventDefault());

window.addEventListener("scroll", () => {
  const myBioSectionTop = myBioSection.getBoundingClientRect().bottom;
  if (myBioSectionTop <= 0) {
    toolbar.classList.remove("hidden");
  } else {
    toolbar.classList.add("hidden");
    dropdownMenu.classList.remove("open");
    menuIcon.src = "/mine/menu-icon.png";
  }
});

menuIcon.addEventListener("click", () => {
  const isOpen = dropdownMenu.classList.contains("open");
  dropdownMenu.classList.toggle("open", !isOpen);
  menuIcon.src = isOpen ? "/mine/menu-icon.png" : "/mine/close-icon.png";
});

document.addEventListener("click", (event) => {
  if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove("open");
    menuIcon.src = "/mine/menu-icon.png";
  }
});
