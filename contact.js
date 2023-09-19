const CTA_TEXT = {
  linkedin: "Linked and Winked",
  github: "Git some of this hub",
  twitter: "Paying for twitter?",
  email: "This is prob the best thing to do.",
};

const contactElements = [...document.querySelectorAll(".contact-item")];
const contactDetails = document.querySelector("#contact-detail");
const contactConnector = document.querySelector("#contact-connector");
const contactCTA = document.querySelector("#contact-cta");

console.log(contactElements.map((element) => element.id));
document.querySelector("#contact-link").addEventListener("mouseleave", () => {
  detailsOpen = "";

  contactElements.forEach((el) => {
    el.style.height = `56px`;
  });

  toggleDetails();
});

var detailsOpen = "";

contactElements.forEach((element) => {
  element.addEventListener("click", () => ContactClick(element));
});

function ContactClick(element) {
  const name = element.id;
  console.log(name);
  if (detailsOpen.length === 0 || detailsOpen !== name) {
    detailsOpen = name;

    contactElements.forEach((el) => {
      el.style.height = `${56 + (el.id === name ? 16 : 0)}px`;
    });

    contactCTA.textContent = CTA_TEXT[name];

    toggleDetails();
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
