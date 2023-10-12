const imgDialog = document.querySelector("#img-display");
const imgDisplay = imgDialog.querySelector("img");

function Find() {
  const parents = document.querySelectorAll(".project-img-parent");

  const children = Array.from(parents).map((p) => p.querySelector("img"));

  parents.forEach((p, index) =>
    p.addEventListener("click", () =>
      DisplayImage(children[index].src, children[index].alt)
    )
  );

  // DisplayImage(children[0].src, children[0].alt);
}

function DisplayImage(img, altText) {
  imgDisplay.src = img;
  imgDisplay.alt = altText;
  imgDialog.showModal();
}

export { Find };
