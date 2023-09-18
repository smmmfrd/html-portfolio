const contactElements = [...document.querySelectorAll(".contact-item")];
const contactDetails = document.querySelector("#contact-detail");
const contactConnector = document.querySelector("#contact-connector");

document.querySelector("#contact-link").addEventListener("mouseleave", () => {
  detailsOpen = "";

  toggleDetails();

  contactConnector.style.height = "0";
});

var detailsOpen = "";

contactElements.forEach((element) => {
  element.addEventListener("click", () => ContactClick(element.id));
});

function ContactClick(name) {
  console.log(name);
  if (detailsOpen.length === 0 || detailsOpen !== name) {
    detailsOpen = name;

    toggleDetails();

    contactConnector.style.height = "1rem";
    const thing = contactElements
      .find((element) => element.id === name)
      .getBoundingClientRect();
    contactConnector.style.left = `${thing.x - 8}px`;
    console.log(thing);
  }
}

function toggleDetails() {
  if (detailsOpen.length > 0) {
    contactDetails.style.height = "7rem";
    contactDetails.style.marginBottom = "1rem";
  } else {
    contactDetails.style.height = "0";
    contactDetails.style.marginBottom = "0";
  }
}
