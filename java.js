function convertToFahrenheit() {

    const celsius = parseFloat(document.getElementById('temperatureInput').value);
    const resultElement = document.getElementById('resultOutput');

    if (isNaN(celsius)) {
        resultElement.textContent = "Prosím zadejte platnou číselnou hodnotu ve stupních Celsia.";
        return;
    }

    const fahrenheit = (celsius * 1.8) + 32;
    

    resultElement.textContent = `${celsius.toFixed(1)}°C je ${fahrenheit.toFixed(2)}°F`;
}
