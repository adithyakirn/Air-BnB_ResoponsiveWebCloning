const navbar = document.querySelector(".homes-icon-container-span");

document.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;

  if (navbar) {
    if (scrollPosition <= 50) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }
  }
});