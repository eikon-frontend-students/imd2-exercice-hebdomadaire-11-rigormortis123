var button = document.querySelector(".button");
var number = document.querySelector(".number");

var onclick = function () {
  button.classList.toggle("is-active");
};

button.addEventListener("click", onCLick);
