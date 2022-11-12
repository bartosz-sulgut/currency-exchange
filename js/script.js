let form = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pln = plnElement.value;
  const currency = currencyElement.value;

  const result = pln * currency;

  resultElement.innerText = result.toFixed(2);
});

form.addEventListener("reset", (event) => {
  event.preventDefault();
  resultElement.innerText = "N/A";
  plnElement.value = "";
  currencyElement.selectedIndex = 0;
});
