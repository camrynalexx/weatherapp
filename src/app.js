function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature")
temperatureElement.innerHTML = Math.round(response.data.main.temp);
}



let apiKey = "281450ec88936f4fa8ee9864682b49a0";
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=${apiKey}&units=metric`;
 

axios.get(apiUrl).then(displayTemperature);