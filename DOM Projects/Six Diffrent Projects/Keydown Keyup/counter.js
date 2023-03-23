const keydownKeyupTextarea = document.getElementById("keydown-keyup-textarea");
const keydownKeyupCount = document.getElementById("keydown-keyup-count");

function handleKeyDownKeyUp() {
  const charCount = keydownKeyupTextarea.value.length;
  keydownKeyupCount.textContent = `${charCount} character${charCount === 1 ? "" : "s"}`;
}

keydownKeyupTextarea.addEventListener("keydown", handleKeyDownKeyUp);
keydownKeyupTextarea.addEventListener("keyup", handleKeyDownKeyUp);
