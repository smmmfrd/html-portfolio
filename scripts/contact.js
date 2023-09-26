const CTA_TEXT = {
  linkedin: {
    text: "Connect with me! →",
    link: "https://www.linkedin.com/in/sam-mumford-66982b25a/",
  },
  github: {
    text: "My code! →",
    link: "https://github.com/smmmfrd",
  },
  twitter: {
    text: "See updates on my work! →",
    link: "https://twitter.com/beheeyum",
  },
  email: {
    text: "Get in contact. →",
    link: "mailto:smmmfrd@gmail.com",
  },
};

const contactElements = [...document.querySelectorAll(".contact-item")];
const contactDetails = document.querySelector("#contact-detail");
const contactConnector = document.querySelector("#contact-connector");
const contactCTA = document.querySelector("#contact-cta");

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
  if (detailsOpen.length === 0 || detailsOpen !== name) {
    detailsOpen = name;

    contactElements.forEach((el) => {
      el.style.height = `${56 + (el.id === name ? 16 : 0)}px`;
    });

    contactCTA.textContent = CTA_TEXT[name].text;
    contactCTA.href = CTA_TEXT[name].link;
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
