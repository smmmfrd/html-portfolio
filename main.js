window.addEventListener("scroll", handleScroll);

(function confirmScroll() {
  // A little trick to confirm the nav text in case a user over scrolls.
  // (when a user does a big scroll & lets go on a phone or a macbook, that doesn't trigger the scroll event)
  setTimeout(() => {
    handleScroll();
    confirmScroll();
  }, 1000);
})();

const navTitle = document.getElementById("nav-title");

const heroElement = document.getElementById("about");
const projectElement = document.getElementById("projects");

const navItems = document.querySelectorAll(".nav-link");

const navChoices = ["about", "projects", "contact"];

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
  const goodItems = navChoices.filter((_, i) => i !== hideIndex);
  navItems.forEach((element, index) => {
    element.textContent = `${goodItems[index].slice(0, 1)}${goodItems[
      index
    ].slice(1)}`;
    element.href = `#${goodItems[index]}`;
  });
}

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
