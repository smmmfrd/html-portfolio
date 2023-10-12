function Find() {
  const parents = document.querySelectorAll(".project-img-parent");
  const children = Array.from(parents).map((p) => p.querySelector("img"));
  parents.forEach((p, index) =>
    p.addEventListener("click", () => DisplayImage(children[index].src))
  );
}

function DisplayImage(img) {
  console.log(img);
}

export { Find };
