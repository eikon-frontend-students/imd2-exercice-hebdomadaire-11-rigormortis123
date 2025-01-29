var button = document.querySelector(".button");
var number = document.querySelector(".number");
var currentValue = parseInt(number.value);

var onClick = function () {
  button.classList.toggle("is-active");
  currentValue = currentValue + 1;
  number.value = currentValue;
};

button.addEventListener("click", onClick);
