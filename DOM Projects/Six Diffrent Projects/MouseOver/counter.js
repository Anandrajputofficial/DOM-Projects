const mouseoverImg = document.getElementById("mouseover-img");
const mouseoverCaption = document.getElementById("mouseover-caption");

function handleMouseOver() {
  mouseoverCaption.classList.remove("hidden");
}

function handleMouseOut() {
  mouseoverCaption.classList.add("hidden");
}

mouseoverImg.addEventListener("mouseover", handleMouseOver);
mouseoverImg.addEventListener("mouseout", handleMouseOut);
