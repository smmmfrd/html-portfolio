const contactElements = [...document.querySelectorAll(".contact-item")];
const contactDetails = document.querySelector("#contact-detail");
const contactConnector = document.querySelector("#contact-connector");

document.querySelector("#contact-link").addEventListener("mouseleave", () => {
  detailsOpen = false;
  contactDetails.style.height = "0";
  contactDetails.style.marginBottom = "0";
  contactConnector.style.height = "0";
});

var detailsOpen = false;

contactElements.forEach((element) => {
  element.addEventListener("click", () => ContactClick(element.id));
});

function ContactClick(name) {
  console.log(name);
  if (!detailsOpen) {
    detailsOpen = true;

    contactDetails.style.height = "7rem";
    contactDetails.style.marginBottom = "1rem";
    contactConnector.style.height = "1rem";
  }
}
