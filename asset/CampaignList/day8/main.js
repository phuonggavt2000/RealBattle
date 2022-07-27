const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const search = $(".input-search");
const city = $(".city");
const country = $(".country");
const value = $(".value");
const shortDesc = $(".short-desc");
const visibility = $(".visibility span");
const wind = $(".wind span");
const cloud = $(".cloud span");
const date = $(".time");

function changeWeatherUi(input) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
  fetch(api)
    .then((response) => response.json())
    .then((weather) => {
      if (Math.round(weather.main.temp) > 19) {
        $("body").className = "hot";
      } else if (Math.round(weather.main.temp) < 19) {
        $("body").className = "cold";
      }
      console.log(weather);
      city.innerText = weather.name;
      country.innerText = weather.sys.country;
      date.innerText = new Date().toLocaleString();
      value.innerText = Math.round(weather.main.temp);
      shortDesc.innerText = weather.weather[0].main;
      visibility.innerText = weather.visibility + `(m)`;
      wind.innerText = weather.wind.speed + "m/s";
      cloud.innerText = weather.clouds.all + "(%)";
    });
}
changeWeatherUi("Vung tau");

search.onkeydown = function (e) {
  if (e.which == 13) {
    search.value = search.value.trim();
    changeWeatherUi(search.value);
    this.value = "";
  }
};
