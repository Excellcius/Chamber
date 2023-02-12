function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
      var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
      return windChill.toFixed(2);
    } else {
      return "N/A";
    }
  }
  
  var temperature = parseFloat(prompt("Enter the temperature (in Fahrenheit)"));
  var windSpeed = parseFloat(prompt("Enter the wind speed (in mph)"));
  
  document.write("Wind Chill Factor: " + calculateWindChill(temperature, windSpeed));
  