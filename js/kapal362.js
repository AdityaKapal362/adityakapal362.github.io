const toolbar = document.getElementById("toolbar");
const myBioSection = document.querySelector(".mybio");
const menuIcon = document.querySelector(".toolbar-menu-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");

window.addEventListener("scroll", () => {
  const myBioSectionTop = myBioSection.getBoundingClientRect().bottom;
  if (myBioSectionTop <= 0) {
    toolbar.classList.remove("hidden");
  } else {
    toolbar.classList.add("hidden");
  }
});

menuIcon.addEventListener("click", () => {
  const isMenuOpen = dropdownMenu.style.display === "block";
  dropdownMenu.style.display = isMenuOpen ? "none" : "block";
  menuIcon.src = isMenuOpen ? "/mine/menu-icon.png" : "/mine/close-icon.png";
});

document.addEventListener("click", (event) => {
  if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = "none";
    menuIcon.src = "/mine/menu-icon.png";
  }
});
