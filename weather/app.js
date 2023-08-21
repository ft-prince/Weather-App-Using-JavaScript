const apikey = "9cd02b9f1cc582fb0774d0de4de1adfe";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=9cd02b9f1cc582fb0774d0de4de1adfe&units=metric
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkwaether(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clears png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "images/clouds.png";
  }
  
  document.querySelector(".weather").style.display = "block";

}

searchbtn.addEventListener("click", () => {
  checkwaether(searchbox.value);
});

checkwaether();
