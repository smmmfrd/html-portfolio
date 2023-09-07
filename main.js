window.addEventListener("scroll", handleScroll);

const navTitle = document.getElementById("nav-title");

const heroElement = document.getElementById("hero");
const projectElement = document.getElementById("projects");

function handleScroll() {
  const heroPosition = heroElement.getBoundingClientRect();
  const projectPosition = projectElement.getBoundingClientRect();

  if (heroPosition.top < window.innerHeight && heroPosition.bottom - 160 >= 0) {
    navTitle.textContent = "Welcome";
  } else if (
    projectPosition.top < window.innerHeight &&
    projectPosition.bottom >= 0
  ) {
    navTitle.textContent = "Projects";
  } else {
    navTitle.textContent = "Contact";
  }
}
