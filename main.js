const amountInput = document.querySelector("#amountInput");
const currency = document.querySelector("#currency");
const newCurrency = document.querySelector("#newcurrency");

const endInput = document.querySelector("#endInput");




const rate = new Currency();

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
}

function exchange() {

  const amount =parseInt(amountInput.value.trim());
  const firstOptionValue = currency.options[currency.selectedIndex].textContent;


 
  const secondOptionValue =
    newCurrency.options[newCurrency.selectedIndex].textContent;

  rate.exchange(amount, firstOptionValue, secondOptionValue).then((result) => {
    endInput.value = result.toFixed(3) 

  });


}
