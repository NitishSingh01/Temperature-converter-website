function convert() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    let result = '';

    if (celsiusInput) {
        const fahrenheit = (celsiusInput * 9/5) + 32;
        result = `${celsiusInput} °C is equal to ${fahrenheit.toFixed(2)} °F`;
    } else if (fahrenheitInput) {
        const celsius = (fahrenheitInput - 32) * 5/9;
        result = `${fahrenheitInput} °F is equal to ${celsius.toFixed(2)} °C`;
    } else {
        result = 'Please enter a value to convert.';
    }

    document.getElementById('result').innerText = result;
}
