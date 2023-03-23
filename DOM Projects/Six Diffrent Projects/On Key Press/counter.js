const keypressInput = document.getElementById("keypress-input");

function handleKeyPress(event) {
  if (event.key === "Enter") {
    alert(`You typed "${event.target.value}"`);
  }
}

keypressInput.addEventListener("keypress", handleKeyPress);
