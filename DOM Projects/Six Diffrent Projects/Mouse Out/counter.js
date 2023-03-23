const mouseoutDiv = document.getElementById("mouseout-div");

function handleMouseOut() {
  mouseoutDiv.classList.add("hovered");
}

mouseoutDiv.addEventListener("mouseout", handleMouseOut);
