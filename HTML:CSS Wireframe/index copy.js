let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let weatherDate = document.querySelector("#weatherCurrentDate");
weatherDate.innerHTML = `${days[now.getDay()]} ${
  months[now.getMonth()]
} ${now.getDate()}, ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;

function searchBtn() {
  let newSearchedCity = document.querySelector("#new-city-input");
  let currentCity = document.querySelector("#result-city");
  currentCity.innerHTML = `${newSearchedCity.value}`;
}

let newCity = document.querySelector("#search-city-form");
newCity.addEventListener("submit", searchBtn);

function changeCelsius() {
  let newTempCelsius = document.querySelector("#currentTemp");
  newTempCelsius.innerHTML = "31";
}
let celsiusTemp = document.querySelector("#c-unit");
celsiusTemp.addEventListener("click", changeCelsius);
console.log("#currentTemp");

function changeF() {
  let newTempF = document.querySelector("#currentTemp");
  newTempF.innerHTML = "88";
}
let fTemp = document.querySelector("#f-unit");
fTemp.addEventListener("click", changeF);


function showTemp(response) {
  console.log(response.data);
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  let newTitle = document.querySelector("h1");
  newTitle.innerHTML = `It is currently ${temp}°C`;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}&lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemp);
}

navigator.geolocation.getCurrentPosition(showPosition);
