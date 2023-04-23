{
    const calculateResult = (amount, currency) => {
        const rateEUR = 1.137701;
        const ratePLN = 5.333323;
        const rateUSD = 1.228474;

        switch (currency) {
            case "EUR": return amount * rateEUR;
            case "PLN": return amount * ratePLN;
            case "USD": return amount * rateUSD;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result")
        resultElement.innerHTML = `Result: ${amount.toFixed(2)} GBP = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount")
        const currencyElement = document.querySelector(".js-currency")

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(+amount, currency);

        updateResultText(amount, result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form")

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}