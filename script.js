function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles) {
    let losAngelesDateElement = losAngeles.querySelector(".date");
    let losAngelesTimeElement = losAngeles.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }

  let sydney = document.querySelector("#sydney");
  if (sydney) {
    let sydneyDateElement = sydney.querySelector(".date");
    let sydneyTimeElement = sydney.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }

  let london = document.querySelector("#london");
  if (london) {
    let londonDateElement = london.querySelector(".date");
    let londonTimeElement = london.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }

  let selectedCity = document.querySelector("#selected-city .location-details");
  if (selectedCity) {
    let cityTimeZone = selectedCity.dataset.timezone;
    if (cityTimeZone) {
      let cityTime = moment().tz(cityTimeZone);
      selectedCity.querySelector(".date").innerHTML =
        cityTime.format("MMMM Do, YYYY");
      selectedCity.querySelector(".time").innerHTML = cityTime.format(
        `h:mm:ss [<small>]A[</small>]`
      );
    }
  }
}

function updateSelectedTime(event) {
  let city = event.target.value;
  if (city === "current") {
    city = moment.tz.guess();
  }
  let cityName = city.includes("/")
    ? city.split("/")[1].replace("_", " ")
    : city;
  let cityTime = moment().tz(city);

  let cityDisplay = document.querySelector("#selected-city");
  cityDisplay.innerHTML = `
    <div class="location-details" data-timezone="${city}">
      <div class="details">
        <h2 class="city">${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
      </div>
      <div class="time">${cityTime.format(`h:mm:ss [<small>]A[</small>]`)}</div>
    </div>
    <a href="/">all cities</a>`;
}

let dropDown = document.querySelector("#drop-down");
dropDown.addEventListener("change", updateSelectedTime);

updateTime();
setInterval(updateTime, 1000);
