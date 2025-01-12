function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngeles.querySelector(".date");
  let losAngelesTimeElement = losAngeles.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  let sydney = document.querySelector("#sydney");
  let sydneyDateElement = sydney.querySelector(".date");
  let sydneyTimeElement = sydney.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );
}

function updateSelectedTime(event) {
  let city = event.target.value;
  let cityName = city.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(`${city}`);
  let cityDisplay = document.querySelector("#selected-city");
  cityDisplay.innerHTML = `
    <div class="location-details" id="los-angeles">
          <div class="details">
            <h2 class="city">${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>AM</small></div>
        </div>`;
}

let dropDown = document.querySelector("#drop-down");
addEventListener("change", updateSelectedTime);

updateTime();
setInterval(updateTime, 1000);
