window.addEventListener("scroll", handleScroll);

const navTitle = document.getElementById("nav-title");

const heroElement = document.getElementById("hero");
const projectElement = document.getElementById("projects");

const navItems = document.querySelectorAll(".nav-item");

function handleScroll() {
  const heroPosition = heroElement.getBoundingClientRect();
  const projectPosition = projectElement.getBoundingClientRect();

  if (heroPosition.top < window.innerHeight && heroPosition.bottom - 160 >= 0) {
    hideNavItem(0);
    startWriting("Welcome");
  } else if (
    projectPosition.top < window.innerHeight &&
    projectPosition.bottom >= 0
  ) {
    hideNavItem(1);
    startWriting("Projects");
  } else {
    hideNavItem(2);
    startWriting("Contact");
  }
}

function hideNavItem(hideIndex) {
  navItems.forEach((element, index) => {
    element.style.width = `${index === hideIndex ? "0%" : "auto"}`;
  });
}
hideNavItem(0);

var started = false;
var writerIndex = 0;
var delay = 50;

function startWriting(text) {
  if (!started && navTitle.textContent !== text) {
    writerIndex = 0;
    started = true;
    write(text);
  }
}

function write(text) {
  if (writerIndex < text.length) {
    writerIndex++;
    navTitle.textContent = text.slice(0, writerIndex);
    setTimeout(() => write(text), delay);
  } else {
    started = false;
  }
}
