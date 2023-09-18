const contactElements = [...document.querySelectorAll(".contact-item")];

contactElements.forEach((element) => {
  element.addEventListener("click", () => ContactClick(element.id));
});

function ContactClick(name) {
  console.log(name);
}
