var button = document.querySelector(".button");
var number = document.querySelector(".number");

function onClick() {
  button.classList.toggle("is-active");
}

button.addEventListener("click", onCLick);
