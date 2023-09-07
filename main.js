window.addEventListener("scroll", handleScroll);

const navTitle = document.getElementById("nav-title");

const heroElement = document.getElementById("hero");
const projectElement = document.getElementById("projects");

function handleScroll() {
  const heroPosition = heroElement.getBoundingClientRect();
  const projectPosition = projectElement.getBoundingClientRect();

  if (heroPosition.top < window.innerHeight && heroPosition.bottom - 160 >= 0) {
    startWriting("Welcome");
  } else if (
    projectPosition.top < window.innerHeight &&
    projectPosition.bottom >= 0
  ) {
    startWriting("Projects");
  } else {
    startWriting("Contact");
  }
}

var started = false;
var index = 0;
var delay = 50;

function startWriting(text) {
  if (!started && navTitle.textContent !== text) {
    index = 0;
    started = true;
    write(text);
  }
}

function write(text) {
  if (index < text.length) {
    index++;
    navTitle.textContent = text.slice(0, index);
    setTimeout(() => write(text), delay);
  } else {
    started = false;
  }
}
