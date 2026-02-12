function celsiusToFahrenheit(celsius_temp) {
    const fahrenheit = (celsius_temp * 9/5) + 32;
    console.log(celsius_temp + "°C is " + fahrenheit + "°F");
}

function fahrenheitToCelsius(fahrenheit_temp) {
    const celsius = (fahrenheit_temp - 32) * 5/9;
    console.log(fahrenheit_temp + "°F is " + celsius + "°C");
}