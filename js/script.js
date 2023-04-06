let formElement = document.querySelector(".js-form")
let amountElement = document.querySelector(".js-amount")
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result")

let rateEUR = 1.137701;
let ratePLN = 5.333323;
let rateUSD = 1.228474;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let amount = +amountElement.value;
let currency = currencyElement.value;

let result

switch (currency) {
 case "EUR": result = amount * rateEUR; break;
 case "PLN": result = amount * ratePLN; break;
 case "USD": result = amount * rateUSD; break;
}

resultElement.innerHTML = `Result: ${amount.toFixed(2)} GBP = <strong>${result.toFixed(2)} ${currency}</strong>`;

});