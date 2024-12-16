  const toolbar = document.getElementById("toolbar");
  const myBioSection = document.querySelector(".mybio");
  window.addEventListener("scroll", () => {
    const myBioSectionTop = myBioSection.getBoundingClientRect().bottom;
    if (myBioSectionTop <= 0) {
      toolbar.classList.remove("hidden");
    } else {
      toolbar.classList.add("hidden");
    }
  });

  const menuIcon = document.querySelector(".toolbar-menu-icon");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  menuIcon.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });
  document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
  });
