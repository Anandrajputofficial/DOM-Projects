const doubleclickBtn = document.getElementById("doubleclick-btn");

function handleDoubleClick() {
  doubleclickBtn.classList.add("clicked");
}

doubleclickBtn.addEventListener("dblclick", handleDoubleClick);
